const Product = require("../models/Product");
exports.getAddProducts = (req, res) => {
  res.render("admin/add-product", {
    title: "add-product",
    path: req.path,
  });
};
exports.postAddProduct = async (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const newP = await Product.create({title,price});
  await newP.save();
  res.redirect("/");
};
