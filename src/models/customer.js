const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerInfo = new Schema({
    firstname:String,
    lastnanme:String,
    email:String,
    phone:String,
    dateTimeCreated:{
        type:Date,
        default:Date.now()

    }
})

module.exports = mongoose.model('Customer' , customerInfo)