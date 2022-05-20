const express = require('express')
const {
    createUser,
    authenticateUser,
    userProfile
} = require('../controller/userController')
const { protect } = require('../middleware/authMiddleware')
const router = express.Router()

router.post("/", createUser )
router.get("/me",protect ,userProfile)
router.post('/login', authenticateUser)

module.exports = router