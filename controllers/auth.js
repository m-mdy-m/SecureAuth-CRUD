const User = require("../models/User");

exports.getSignup = (req, res) => {
  res.render("auth/signup", {
    title: "signup",
    path: req.path,
  });
};
exports.postSignUp = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  let user = await User.findOne({email})
  if(user){
    console.log('is user')
    return res.redirect('/')
  }
  user = await User.create({ username, email, password });
  await user.save()
   res.redirect('/login')
};
exports.getLogin = async (req,res)=>{
    res.render('auth/login', {
        title : 'login',
        path : req.path,
        
    })
}