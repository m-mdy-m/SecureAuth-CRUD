const express = require('express')
const router = express.Router()
const adminC = require('../controllers/admin')
router.get('/add-product', adminC.getAddProducts)
router.post('/add-product', adminC.postAddProduct)

// === admin route

router.get('/admin', adminC.getAdmin)

router.post('/admin', adminC.postDelete)

router.get('/edit-product/:prodId', adminC.getEdit)

router.post('/edit-product', adminC.postEdit)
module.exports = router