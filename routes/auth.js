const express = require('express')
const router = express.Router()
const authC = require('../controllers/auth')
router.get('/signup', authC.getSignup)
router.post('/signup', authC.postSignUp)

router.get('/login', authC.getLogin)
router.post('/login', authC.postLogin)

router.post('/logout', authC.postLogOut)


router.get('/rest', authC.getResetPass)
module.exports = router