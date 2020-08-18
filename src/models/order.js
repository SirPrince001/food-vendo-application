const mongoose = require('mongoose')
const Schema = mongoose.Schema

let customerOrder = new Schema({
    customer:{type:mongoose.Schema.Types.ObjectId , ref: 'Customer'},
    customerId :String,
    itemOrdered:{type:mongoose.Schema.Types.ObjectId, ref: 'Menu', required:true},
    
    orderStatus:{
        type:String,
        default:"pending"
    },
    dateAndTimeofOrder:{
        type:Date,
        default:Date.now()
    }
    

})

module.exports = mongoose.model("ORDER" , customerOrder)