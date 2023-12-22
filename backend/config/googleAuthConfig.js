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
    // check if user exists in database
    const user = await User.findOne({ email: profile.emails[0].value })

    if (user) {
      // log the user in
      done(null, user)
    } else {
      const newUser = new User({
        username: profile.displayName,
        email: profile.emails[0].value,
        fName: profile.name.givenName,
        lName: profile.name.familyName,
        //profilePicture: profile.photos[0].value,
        profilePicture: "",
        settings: {
          dark: false
        }
      })

      // save user to the database
      await newUser.save()

      // log the new user in
      done(null, newUser)
    }
  } catch (error) {
    done(error)
  }
}))
