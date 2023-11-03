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
    res.status(200).json({ message: "deleted user" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getAllUsers,
  getById,
  editUser,
  deleteUser
}
