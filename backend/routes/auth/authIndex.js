// API routes for authorization

const express = require('express')
const router = express.Router()
const authController = require('../../controllers/authController')

router.route('/register').post(authController.register)
router.route('/login').post(authController.login)
router.route('/logout').post(authController.logout)
router.route('/login/auth/google').get(authController.googleAuth)
router.route('/oauth2/redirect/google').get(authController.googleAuthRedirect)
router.route('/forgotPassword').post(authController.forgotPassword)
router.route('/resetPassword/:token').patch(authController.resetPassword)

module.exports = router
