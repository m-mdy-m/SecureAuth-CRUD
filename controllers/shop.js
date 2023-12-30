const Product = require('../models/Product')

exports.getShop = async (req,res)=>{
    const products = await Product.find()
    res.render('shop/index', {
        title : "HOME",
        path : req.path,
        products
    })
}