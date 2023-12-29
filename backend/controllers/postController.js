const Post = require('../models/postModel')
const Comment = require('../models/commentModel')

// Demo for creating a post
const createPost = async (req, res) => {
  try {
    const { userID, text, image } = req.body
    const post = new Post({ userID, text, image })
    await post.save()
    res.status(201).json({ message: 'Post created', post })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// funtion to check if a post exists
const checkPostExistence = async (postID) => {
  try {
    const post = await Post.findById(postID)
    if (!post) {
      throw new Error(`Post with ID ${postID} not found`)
    }
    return post;
  } catch (error) {
    throw new Error(error.message)
  }
}

// Demo for adding a comment to a post
const addComment = async (req, res) => {
  try {
    const { userID, commentText } = req.body
    const { postID } = req.params

    // Check if the post exists
    const post = await checkPostExistence(postID)

    // Create a new comment
    const comment = new Comment({ userID, commentText, postID })
    await comment.save()

    // Attach the comment to the specified post
    post.comments.push(comment._id)
    await post.save()

    res.status(201).json({ message: 'Comment added to post', comment, post })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Demo for liking a post
const likePost = async (req, res) => {
  try {
    const { userID } = req.body
    const { postID } = req.params

    // Check if the post exists
    const post = await checkPostExistence(postID)

    // Attach the user to the specified post
    if (!post.likes.includes(userID)) {
      post.likes.push(userID)
      await post.save()
    }

    res.status(201).json({ message: 'Post liked', post })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Demo for getting all comments for a post
const getAllCommentsForPost = async (req, res) => {
  try {
    const { postID } = req.params
    const post = await Post.findById(postID).populate('comments')
    if (!post) {
      return res
        .status(404)
        .json({ message: `Post with ID ${postID} not found` })
    }
    const comments = post.comments
    res.json({ comments })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Demo for getting all likes for a post
const getAllLikesForPost = async (req, res) => {
  try {
    const { postID } = req.params
    const post = await Post.findById(postID).populate('likes')
    if (!post) {
      return res
        .status(404)
        .json({ message: `Post with ID ${postID} not found` })
    }
    const likes = post.likes
    res.json({ likes })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  createPost,
  addComment,
  likePost,
  getAllCommentsForPost,
  getAllLikesForPost
}
