const express = require('express')
const ShopController = require('../controllers/shop.controller')
const TokenMiddleware = require('../middlewares/token.middleware')
const router = express.Router()

router.get('/shops', ShopController.getAll)
router.post('/shops', TokenMiddleware, ShopController.create)

module.exports = router