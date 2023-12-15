const express = require('express')
const router = express.Router()
const userController = require('../../controllers/userController')
const authController = require('../../controllers/authController')

router.route('/').get(userController.getAllUsers)
router.route('/:id').get(userController.getById)
router.route('/update/:id').put(userController.editUser)
router.route('/delete/:id').delete(userController.deleteUser)

router.patch("/updateProfile/:id", userController.updateMe)
router.post('/changePassword/:id', userController.changePassword)

module.exports = router
