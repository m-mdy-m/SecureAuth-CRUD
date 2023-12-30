const express = require('express')
const router = express.Router()
const authC = require('../controllers/auth')

router.get('/signup', authC.getSignup)

module.exports = router