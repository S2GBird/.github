const passport = require('passport')
const User = require('../models/userModel')
const GoogleOIDCStrategy = require('passport-google-oidc').Strategy

passport.use(new GoogleOIDCStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: process.env.GOOGLE_REDIRECT
},
async function (accessToken, profile, done) {
  try {
    // Check if user exists in database
    const user = await User.findOne({ email: profile.emails[0].value })

    // Call 'done' function to signal completion of authentication process
    // User object is passed and attached to `req.user` object 
    if (user) {
      done(null, user)
    }else {
      // Check if Username exist in database
      let googleName = profile.displayName
      let uniqueName = await User.findOne({ username: googleName })
      //If a user with the same username exists, generate a new username
      while (uniqueName) {
        googleName = googleName + Math.floor(Math.random() * 1000)
        uniqueName = await User.findOne({ username: googleName })
      } 
      
      const newUser = new User({
        username: googleName,
        email: profile.emails[0].value,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        profilePicture: '',
        settings: {
          dark: false
        }
      })

      // Save new user object user to the database
      await newUser.save()

      // Call `done` function to signal completion of authentication process
      // New user object is passed and attached to `req.user` object 
      done(null, newUser)
    }
  } catch (error) {
    done(error)
  }
}))
