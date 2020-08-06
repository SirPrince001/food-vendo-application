const mongoose = require('mongoose')
const Schema = mongoose.Schema

let customerOrder = new Schema({
    customer:{type:mongoose.Schema.Types.ObjectId , ref: 'Customer'},
    customerId :String,
    vendorId :String,
    description:String,
    itemOrdered:[String],
    amountDue:Number,
    amountPaid:Number,
    amountOutstanding:Number,
    orderStatus:{
        preparing:{
            type:Boolean,
            required:true
        },
        ontheway:{
            type:Boolean,
            required:true
        },
        delivered:{
            type:Boolean,
            required:true
        }
    },
    dateAndTimeofOrder:{
        type:Date,
        default:Date.now()
    }
    

})

module.exports = mongoose.model("ORDER" , customerOrder)