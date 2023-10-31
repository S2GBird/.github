const express = require('express')
const cors = require('cors')
const connectDB = require('./database/db')
const User = require('./models/userModel')
const app = express()
const passport = require('passport')
const session = require('express-session')
const { register, logout } = require('./controllers/auth.controller')
const { login } = require('./controllers/auth.controller')
const helmet = require('helmet')

require('mongoose')
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectDB()

// Configuring Passport login sessions
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
  })
)
app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// Configuring Passport local strategy
passport.use(User.createStrategy())

// // Homepage
// app.get('/', async function (req, res) {
//   res.send('Hello World!')
// })

app.use(helmet())
// Route for user authentication
app.post('/register', register)

// Route for user Login
app.post('/login', login)

// Route for user Logout
app.post('/logout', logout)

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
// app.post('/register', async (req, res) => {
//   try {
//     console.log(req.body)
//     const user = await User.create(req.body)
//     res.status(200).json(user)
//   } catch (error) {
//     console.log(error.message)
//     res.status(500).json({ message: error.message })
//   }
// })

// Demo for logging in user
// app.post('/login', async (req, res) => {
//   try {
//     const { email } = req.body
//     const user = await User.findOne({ email })
//     res.status(200).json(user)
//   } catch (error) {
//     console.log(error.message)
//     res.status(500).json({ message: error.message })
//   }
// })

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
