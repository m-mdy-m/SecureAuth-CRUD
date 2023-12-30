const express = require('express')
const router = express.Router()
const shopC = require('../controllers/shop')
router.get('/',shopC.getShop)

module.exports = router