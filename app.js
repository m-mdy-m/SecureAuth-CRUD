const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path');
const URL =  'mongodb://localhost:27017/Secure-CRUD'
app.set('view engine' , 'ejs')
app.set('views', 'views')
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname,'public')))

const adminR = require('./routes/admin')
const shopR = require('./routes/shop')
const authR = require('./routes/auth')
app.use(authR)
app.use(adminR)
app.use(shopR)


const start = async ()=>{
    try{
        await mongoose.connect(URL)
        console.log('connect database');
        app.listen(3000, ()=>{console.log('run server on port 3000');})
    }catch(err){
        console.log(err);
    }
}
start()