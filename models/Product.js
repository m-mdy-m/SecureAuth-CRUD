const { Schema, default: mongoose } = require('mongoose')

const Product = new Schema({
    title : {
        type : String,
        required : true,
    },
    price:{
        type: String,
        required:true,
    },
})
module.exports = mongoose.model('Product', Product)