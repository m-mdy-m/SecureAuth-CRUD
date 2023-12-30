const User = require("../models/User");
const bcryptjs = require("bcryptjs");
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
  const hashedPass = await bcryptjs.hash(password, 8);
  let user = await User.findOne({ email });
  if (user) {
    console.log("is user");
    return res.redirect("/");
  }
  user = await User.create({ username, email, password: hashedPass });
  await user.save();
  res.redirect("/login");
};
exports.getLogin = async (req, res) => {
  res.render("auth/login", {
    title: "login",
    path: req.path,
  });
};
exports.postLogin = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  let user = await User.findOne({ email, username });
  if (!user) {
    return res.redirect("/");
  }
  const machPass = await bcryptjs.compare(password, user.password);
  if (!machPass) {
    return res.redirect("/signup");
  }
  req.session.user = user;
  req.session.isLogin = true;
  await req.session.save();
  res.redirect("/");
};
exports.postLogOut = async (req, res) => {
  await req.session.destroy();
  console.log("delete session");
  res.redirect("/");
};
exports.getResetPass = (req,res)=>{
    res.render('auth/reset',{
        title:'resetPass',
        path:req.path
    })
}