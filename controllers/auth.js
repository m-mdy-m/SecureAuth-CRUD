const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7d555598001454",
    pass: "745c69e3e0c996",
  },
});
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
exports.getResetPass = (req, res) => {
  res.render("auth/reset", {
    title: "resetPass",
    path: req.path,
  });
};
exports.postResetPass = (req, res) => {
  const email = req.body.email;
  crypto.randomBytes(12, async (err, buf) => {
    if (err) {
      return res.redirect("/");
    }
    const token = buf.toString("hex");
    const user = await User.findOne({ email });
    if (!user) {
      return res.redirect("/");
    }
    user.rstT = token;
    user.rstT_Ex = Date.now() + 3600;
    await user.save();
    await transport.sendMail({
      form: "mahdimamashli1383@gmail.com",
      to: email,
      subject: "Reset Password",
      html: `<a href="http://localhost:3000/reset/${token}/">Click Here To Reset Your PassWord`,
    });
    res.redirect('/')
  });
};
