const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const passport = require('passport')
const connectDB = require('./database/db')
const User = require('./models/userModel')
const app = express()
require('./config/googleAuthConfig')

require('mongoose')
require('dotenv').config()
require('passport-local-mongoose')

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configuring Passport login sessions
app.use(require('express-session')({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}))

connectDB()

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(require('./routes'))

// Homepage
app.get('/', async function (req, res) {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Node.js app running on port ${process.env.PORT}`)
})
