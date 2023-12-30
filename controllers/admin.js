const Product = require("../models/Product");
exports.getAddProducts = (req, res) => {
  res.render("admin/add-product", {
    title: "add-product",
    path: req.path,
    editing: false,
  });
};
exports.postAddProduct = async (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const newP = await Product.create({ title, price, userId : req.session.user });
  await newP.save();
  res.redirect("/");
};
// === admin route

exports.getAdmin = async (req, res) => {
  const products = await Product.find({ userId: req.session.user._id });
  res.render("admin/dashboard", {
    title: "dashboard",
    path: req.path,
    products,
  });
};

exports.postDelete = async (req, res) => {
  const id = req.body.prodId;
  await Product.deleteOne({_id : id , userId : req.session.user._id})
  res.redirect("/");
};
exports.getEdit = async (req, res) => {
  const editing = req.query.edit;
  const id = req.params.prodId;
  const product = await Product.findById(id);
  res.render("admin/add-product", {
    title: "edit",
    path: req.path,
    editing,
    product,
    
  });
};
exports.postEdit = async (req, res) => {
  try {
    const id = req.body.prodId;
    const title = req.body.title;
    const price = req.body.price;
    await Product.findByIdAndUpdate(id, { title, price });
    res.redirect("/");
  } catch (err) {
    console.log("err");
  }
};
