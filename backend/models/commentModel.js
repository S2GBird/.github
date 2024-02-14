const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema(
  {
    commentText: {
      type: String,
      required: true
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'UserID missing']
    },
    username: {
      type: String,
      required: [true, 'Username missing']
    },
    postID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      required: [true, 'PostID missing']
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  { timestamps: true }
)

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment
