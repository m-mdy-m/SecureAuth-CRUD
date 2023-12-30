const express = require('express')
const router = express.Router()
const adminC = require('../controllers/admin')
router.get('/add-product', adminC.getAddProducts)
router.post('/add-product', adminC.postAddProduct)

// === admin route

router.get('/admin', adminC.getAdmin)

module.exports = router