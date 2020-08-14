const { Response, ResponseError } = require("../utils/response");
const Order = require("../models/order");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config();

exports.OrderOntheway = async (request) => {
  const token = request.get("Authorization");
  if (!token)
    throw new ResponseError(400, "Please provide a valid Vendor Token");

//  try {
    const verifyUserToken = jwt.verify(token, process.env.SECRETKEY);
    
    if (verifyUserToken.role === "Vendor") {
        let orderId = request.params.id;
      if (!mongoose.isValidObjectId(orderId))
        throw new ResponseError(400, `id ${orderId} is not a valid order Id`);
     
        let orderStatus = Order.findByIdAndUpdate({_id:orderId} ,{$addToSet:{orderStatus:order.OrderOntheway}}) 
      
      return new Response(200, { order_status: orderStatus });
    }
 // } catch (error) {
    throw new ResponseError(
      400,
      "Sorry we cannot track your order at the moment"
    );
  //}
};
