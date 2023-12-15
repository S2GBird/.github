const User = require('../models/userModel')

// Demo for pulling all user data
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Demo for pulling user by ID
const getById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Demo for editing user info
const editUser = async (req, res) => {
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
}

// Demo for deleting user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndDelete(id)
    if (!user) {
      return res.status(404).json({ message: `user ID ${id} does not exist` })
    }
    res.status(200).json({ message: 'deleted user' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// change user profile (first name, last name, email)
const updateMe = async (req, res, next) => {
  try {
    const { id } = req.params
    const {fName, lName, email}  = req.body
    const newUser = {fName, lName, email}
    const updatedUser = await User.findByIdAndUpdate(id, newUser, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({ status: "success", results: {updatedUser}})
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const changePassword = async (req,res) => {
  try {
    const {id} = req.params
    const user = await User.findById(id)
    if (!user) {
      res.status(404).json({ message: `user ID ${id} does not exist` })
    } else {
      user.changePassword(req.body.oldpassword, req.body.newpassword, function(err) {
        if (err) {
          res.send(err)
        } else {
          res.status(200).json({message: 'password successfully changes'})
        }
      })
    }
  } catch(error) {
      res.status(500).json({ message: error.message })
  }
} 

/*const forgotPassword = (req, res) => {
  User.findOne({ _id: req.user.username })
  .then((u) => {
      u.setPassword(req.body.newPassword,(err, u) => {
          if (err) return next(err);
          u.save();
          res.status(200).json({ message: 'password change successful' });
      });

  })
}*/

module.exports = {
  getAllUsers,
  getById,
  editUser,
  deleteUser,
  updateMe,
  changePassword,
  // forgotPassword
}
