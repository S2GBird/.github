const express = require('express')
const router = express.Router()
const postController = require('../../controllers/postController')

router.route('/posts').post(postController.createPost)
router.route('/posts/:postID/comments').post(postController.addComment)
router.route('/posts/:postID/likes').post(postController.likePost)
router.route('/posts/:postID/comments').get(postController.getAllCommentsForPost)
router.route('/posts/:postID/likes').get(postController.getAllLikesForPost)
router.route('/posts/:postID/liked/:userID').get(postController.checkIfPostIsLiked)
router.route('/comments/:commentID/like').post(postController.addLikeToComment)
router.route('/comments/:commentID/unlike').post(postController.removeLikeFromComment)
router.route('/comments/:commentID/liked/:userID').get(postController.checkIfCommentIsLiked)

module.exports = router
