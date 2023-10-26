const express = require('express')
const cors = require('cors')
const connectDB = require('./database/db')
const User = require('./models/userModel')
const app = express()
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');

require('mongoose')
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectDB()

// Secret key for auth0 authentication, needs to be same for everybody
const SECRET_KEY = process.env.SECRET_KEY
const CLIENT_ID = process.env.CLIENT_ID
const BASE_URL = process.env.BASE_URL
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: SECRET_KEY,
  baseURL: 'http://localhost:3000',
  clientID: CLIENT_ID,
  issuerBaseURL: BASE_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
});

// requiresAuth() is a middleware that checks whether the user is logged in
app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

// // Homepage
// app.get('/', async function (req, res) {
//   res.send('Hello World!')
// })

// routes for authentication?
app.get('/login', async function (req, res) { })

app.get('/register', async function (req, res) { })

// Demo for pulling all user data
app.get('/users', async (req, res) => {
  try {
    const users = await User.find({})
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Demo for pulling user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Demo for registering new user
app.post('/register', async (req, res) => {
  try {
    console.log(req.body)
    const user = await User.create(req.body)
    res.status(200).json(user)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
})

// Demo for editing user info
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndUpdate(id, req.body)

    if (!user) {
      return res.status(404).json({ message: `user ID ${id} does not exist` })
    }
    const updatedUser = await User.findById(id)
    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Demo for deleting user
app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndDelete(id)
    if (!user) {
      return res.status(404).json({ message: `user ID ${id} does not exist` })
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Node.js app running on port ${process.env.PORT}`)
})
