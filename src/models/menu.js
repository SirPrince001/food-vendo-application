const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vendorMenu = new Schema({
    name:String,
    description:String,
    price:String,
    quantity:Number,
    dateTimeCreated:Data
})