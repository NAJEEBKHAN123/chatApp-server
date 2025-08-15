const express = require('express')
const protectRoute = require('../middleware/authMiddleware')
const {getUsersForSidebar, getMessage, sendMessage} = require('../controller/messageController')
const router = express()


router.get('/users', protectRoute, getUsersForSidebar)
router.get('/:id', protectRoute, getMessage)
router.post('/send/:id', protectRoute, sendMessage)



module.exports = router