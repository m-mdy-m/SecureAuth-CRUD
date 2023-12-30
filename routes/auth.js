const express = require('express')
const router = express.Router()
const authC = require('../controllers/auth')

router.get('/signup', authC.getSignup)
router.post('/signup', authC.postSignUp)
module.exports = router