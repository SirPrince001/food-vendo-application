const { Response, ResponseError } = require("../utils/response");
const Order = require("../models/order");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config();

exports.OrderInfo = async (request) => {
  //let order;
  
 
  const token = request.get("Authorization");
  if (!token)
    throw new ResponseError(400, "Please provide a valid Vendor Token");

  //  try {
  const verifyUserToken = jwt.verify(token, process.env.SECRETKEY);

  if (verifyUserToken.role === "Vendor") {
    //let orderId = request.params.id;
    let {orderId, orderStatus } = request.body;
    if (!mongoose.isValidObjectId(orderId))
      throw new ResponseError(400, `id ${orderId} is not a valid order Id`);

    //  const sUpdate = new Order({
    //    orderId,orderStatus
    //  })

    //if (orderStatus === "processing " || orderStatus === "delivered")
    await Order.findOneAndUpdate({_id:orderId },{orderStatus: orderStatus});
  
      console.log(orderStatus)

    return new Response(200, { order_status: orderStatus});
  }
  // } catch (error) {
  throw new ResponseError(
    400,
    "Sorry we cannot track your order at the moment"
  );
  //}
};
