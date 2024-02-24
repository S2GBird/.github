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
      // Check if user already exists in database
        const user = await User.findOne({ email: profile.emails[0].value })
    
    //Call 'done' function to signal completion of authentication process 
    //User object is passed and attached to `req.user` object by Passport.js
    if (user) {
      done(null, user)
    } 
    //Create a new user objet with related information when not found in database
    else {
      const newUser = new User({
        username: profile.displayName,
        email: profile.emails[0].value,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        profilePicture: '',
        settings: {
          dark: false
        }
      })

      //Save new user object user to the database
        await newUser.save()

      //Call `done` function to signal completion of authentication process 
      // New user object is passed and attached to `req.user` object by Passport.js
          done(null, newUser)
    }
  } catch (error) {
    done(error)
  }
}))
