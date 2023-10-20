const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email missing"],
  },

  password: {
    type: String,
    required: [true, "Password missing"],
  },
  fName: {
    type: String,
  },
  lName: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
  settings: {
    type: Object,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
