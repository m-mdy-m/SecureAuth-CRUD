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
  const user = await User.create({ username, email, password });
  await user.save()
  res.redirect('/')
};
