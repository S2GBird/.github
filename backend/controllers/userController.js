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
    const { fName, lName, email } = req.body
    const newUser = { fName, lName, email }
    const updatedUser = await User.findByIdAndUpdate(id, newUser, {
      new: true,
      runValidators: true
    })
    res.status(200).json({ status: 'success', results: { updatedUser } })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const changePassword = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (!user) {
      res.status(404).json({ message: `user ID ${id} does not exist` })
    } else {
      user.changePassword(req.body.oldpassword, req.body.newpassword, function (err) {
        if (err) {
          res.send(err)
        } else {
          res.status(200).json({ message: 'password successfully changed' })
        }
      })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Add a follower to a user
const addFollower = async (req, res) => {
  try {
    const { userId, followerId } = req.body
    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { followers: followerId } }, // Add the follower to the user's followers array
      { new: true }
    )
    res.status(200).json({ message: 'user followed successfully', results: { user } })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Remove a follower from a user
const unfollowUser = async (req, res) => {
  try {
    const { userId, followerId } = req.body
    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { followers: followerId } }, // Remove the follower from the user's followers array
      { new: true }
    )
    res.status(200).json({ message: 'user unfollowed successfully', results: { user } })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get followers count for a user
const getFollowersCount = async (req, res) => {
  try {
    const { userId } = req.body
    const user = await User.findById(userId)
    if (!user) {
      res.status(404).json({ message: `user ID ${id} does not exist` })
    }
    const followersCount = user.followers.length
    res.status(200).json({ followers: followersCount })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get all followers for a user
const getAllFollowers = async (req, res) => {
  try {
    const { userId } = req.body
    const user = await User.findById(userId).populate('followers', 'username') // Populate the followers field with usernames
    if (!user) {
      res.status(404).json({ message: `user ID ${id} does not exist` })
    }
    const followers = user.followers
    res.status(200).json({ allFollowers: followers })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getAllUsers,
  getById,
  editUser,
  deleteUser,
  updateMe,
  changePassword,
  addFollower,
  unfollowUser,
  getFollowersCount,
  getAllFollowers
}
