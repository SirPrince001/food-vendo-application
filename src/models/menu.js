const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vendorMenu = new Schema({
    name:String,
    description:String,
    price:String,
    quantity:Number,
    dateTimeCreated:{
        type:Date,
        default:Date.now()
    },
    vendorId: [Schema.Types.ObjectId],
    isRecurring:Boolean,
    frequencyOfReocurrence:Boolean
})

module.exports = mongoose.model('Menu' , vendorMenu)