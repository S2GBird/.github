const express = require('express')
const router = express.Router()
const postController = require('../../controllers/postController')

router.route('/posts').post(postController.createPost)
router.route('/posts/:postID/comments').post(postController.addComment)
router.route('/posts/:postID/likes').post(postController.likePost)
router.route('/posts/:postID/comments').get(postController.getAllCommentsForPost)
router.route('/posts/:postID/likes').get(postController.getAllLikesForPost)

module.exports = router