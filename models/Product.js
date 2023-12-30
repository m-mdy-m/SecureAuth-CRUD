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
    userId : {
        type : Schema.Types.ObjectId,
        required : true,
    }
})
module.exports = mongoose.model('Product', Product)