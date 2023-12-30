const passport = require('passport')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

// Registering new users
const register = async (req, res) => {
  try {
    // Create a new user object from request body
    const newUser = {
      email: req.body.email,
      username: req.body.username,
      fName: req.body.fName,
      lName: req.body.lName,
      profilePicture: '',
      settings: {
        dark: false
      }
    }
    // call userSchema's register method to save user in Mongo and salt/hash passowrd
    User.register(new User(newUser), req.body.password, function (error, user) {
      if (error) {
        console.error('error in registering user', error.message)
        res.json({ success: false, message: error })
        return
      }

      // establish a login session for newly registered user
      req.login(user, (error) => {
        if (error) {
          console.error('after registering, login error', error.message)
          res.json({ success: false, message: error })
          return
        }

        res.json({ success: true, message: 'registration success!' })
      })
    })
  } catch (error) {
    console.error('error caught at beginning of registration function', error.message)
    res.json({ success: false, message: error })
  }
}

// Login user
const login = async (req, res) => {
  try {
    // Authenticate user with passport's local strategy
    passport.authenticate('local', function (error, user, info) {
      // Early return for login errors
      if (error) {
        res.json({ success: false, message: error })
        return
      }
      // Return error if user not found
      if (!user) {
        res.json({ success: false, message: 'username or password incorrect' })
        return
      }
      // Create JWT with user info
      const token = jwt.sign({ userId: user._id, username: user.username }, process.env.SECRET_KEY, { expiresIn: '24h' })
      const expires = new Date(Date.now() + 24 * 3600000) // 24 hours

      // Send Set-Cookie header to frontend with JWT
      res.cookie('login_token', token, {
        httpOnly: true,
        sameSite: true,
        expires
      })
      // Sending user info back to frontend
      return res.status(200).json({
        success: true,
        message: 'user authenticated',
        userId: user._id,
        username: user.username
      })
    })(req, res)
  } catch (error) {
    res.json({
      success: false,
      message: error
    })
  }
}

// Logout user
const logout = async (req, res) => {
  res.clearCookie('login_token').sendStatus(200)
}

// initiate google login
const googleAuth = passport.authenticate('google', { scope: ['profile', 'email'] })

// handle google redirect
const googleAuthRedirect = passport.authenticate('google', {
  failureRedirect: 'http://localhost:3000/signup',
  successRedirect: 'http://localhost:3000/login'
})

module.exports = {
  register,
  login,
  logout,
  googleAuth,
  googleAuthRedirect
}
