const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vendor = new Schema({
  businessName: String,
  name:String,
  
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  password:{
    type:String,
    delete:false
  },
  phone: Number,
  dateTimeCreated:{
    type:Date,
    default:Date.now()
  },
  role:{
    type:String,
    default:"none"
  }
});

module.exports = mongoose.model("VENDOR", vendor);
