// Require the user controller
import { register, login, logout } from '../controllers/auth.controller.js'
const express = require('express')

const router = express.Router()

// Register, login, logout Route
router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)

export default router
