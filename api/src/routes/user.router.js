const express = require('express')
const UserController = require('../controllers/user.controller')
const TokenMiddleware = require('../middlewares/token.middleware')
const router = express.Router()

router.put('/users/:id', TokenMiddleware, UserController.update)

module.exports = router