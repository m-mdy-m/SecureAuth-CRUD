const { Schema, default: mongoose } = require('mongoose')

const User = new Schema({
    title : {
        type : String,
        required : true,
    },
    price:{
        type: String,
        required:true,
    },
})
module.exports = mongoose.model('User', User)