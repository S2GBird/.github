const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// Register Route
const register = async (req, res) => {
  const { email, username, password, fName, lName, profilePicture, settings } =
    req.body

  // Hash the user's password
  const hashedPassword = bcrypt.hashSync(password, 13)
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    fName,
    lName,
    profilePicture,
    settings
  })

  try {
    await newUser.save()
    res.status(201).json({
      success: true,
      message: `User created successfully ${newUser}`
    })
  } catch (error) {
    console.error(error)
  }
}

// Login Route 
const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' })
  }

  try {
    // Find the user
    const user = await User.findOne({ email })

    // If no user is found, return an error
    if (!user) {
      return res.status(401).json({ message: 'User not found' })
    }

    // Comparing the password with the hashed password
    const hashedPassword = bcrypt.compareSync(password, user.password)

    if (!hashedPassword) {
      return res.status(401).json({ message: 'Authentication failed' })
    }

    // If both email and password are correct, proceed with generating a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '24h'
    })
    const expires = new Date(Date.now() + 24 * 3600000) // 24 hours

    // Send the token to the frontend
    res.cookie('login_token', token, { httpOnly: true, expires }).sendStatus(200)
  } catch (error) {
    console.error('Something went wrong: ', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

// Logout Route
const logout = async (req, res) => {
  res.clearCookie('login_token').sendStatus(200)
}

module.exports = {
  register,
  login,
  logout
}
