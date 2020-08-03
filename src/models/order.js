const mongoose = require('mongoose')
const Schema = mongoose.Schema

let customerOrder = new Schema({
    customerId :String,
    vendorId :String,
    description:String,
    itemOrdered:[String],
    amountDue:Number,
    amountPaid:Number,
    amountOutstanding:Number,
    orderStatus:String,
    dateAndTimeofOrder:{
        type:Date,
        default:Date.now()
    }

})

module.exports = mongoose.model("ORDER" , customerOrder)