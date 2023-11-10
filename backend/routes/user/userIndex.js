const express = require('express')
const router = express.Router()
const userController = require('../../controllers/userController')

router.route('/').get(userController.getAllUsers)
router.route('/:id').get(userController.getById)
router.route('/update/:id').put(userController.editUser)
router.route('/delete/:id').delete(userController.deleteUser)

module.exports = router
