const express = require('express')
const router = express.Router()
const adminC = require('../controllers/admin')
const isAuth = require('../middleware/is-auth')
router.get('/add-product',isAuth, adminC.getAddProducts)
router.post('/add-product',isAuth, adminC.postAddProduct)

// === admin route

router.get('/admin',isAuth, adminC.getAdmin)

router.post('/admin',isAuth, adminC.postDelete)

router.get('/edit-product/:prodId',isAuth, adminC.getEdit)

router.post('/edit-product',isAuth, adminC.postEdit)
module.exports = router