const Order = require("../models/order");
const { Response, ResponseError } = require("../utils/response");
const jwt = require("jsonwebtoken");

exports.viewOrders = async (request) => {
  const token = request.get("Authorization");
  if (!token) throw new ResponseError(400, "Please Provide Vendor token");

  try {
    let vendorToken = jwt.verify(token, process.env.SECRETKEY);
    if (vendorToken.role === "Vendor") {
      let viewAllorders = await Order.find({});
      return new Response(200, { orders: viewAllorders });
    }
  } catch (error) {
    throw new ResponseError(400, "You cannot not view orders");
  }
};
