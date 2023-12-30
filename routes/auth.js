const express = require('express')
const router = express.Router()
const authC = require('../controllers/auth')

router.get('/signup', authC.getSignup)
router.post('/signup', authC.postSignUp)

router.get('/login', authC.getLogin)
module.exports = router