const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email missing'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password missing'],
  },
  fName: {
    type: String
  },
  lName: {
    type: String
  },
  profilePicture: {
    type: String
  },
  settings: {
    type: Object
  }
})

userSchema.plugin(passportLocalMongoose)
const User = mongoose.model('User', userSchema)

module.exports = User
