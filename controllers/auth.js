const User = require('../models/User')

exports.getSignup  = (req,res)=>{
    res.render('auth/signup', {
        title : "signup",
        path : req.path
    })
}