const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username missing'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'Email missing'],
    match: /.+@.+\..+/,
    unique: true
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
    type: Map
  }
})

userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', userSchema)

module.exports = User
