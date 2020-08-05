const CustomerOrder = require("../models/order");
const Customer = require("../models/customer");
const { Response, ResponseError } = require("../utils/response");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.Order = async (request) => {
  const token = request.get("Authorization");
  if (!token)
    throw new ResponseError(
      400,
      "Provide a token before ou could make an order"
    );
  const verifyCustomer = jwt.verify(token, process.env.SECRETKEY);
  let customer_Id = await Customer.findById(verifyCustomer.id);
  if (!customer_Id)
    throw new ResponseError(400, "No Customer with such ID exist");

  if (verifyCustomer.role === "Customer") {
    let {
      customerId,
      vendorId,
      description,
      itemOrdered,
      amountDue,
      amountPaid,
      amountOutstanding,
    } = request.body;
    let order = new CustomerOrder({
      customerId: customerId,
      vendorId: vendorId,
      description: description,
      itemOrdered: itemOrdered,
      amountDue: amountDue,
      amountPaid: amountPaid,
      amountOutstanding: amountOutstanding,
    });
    let displayOrder = await order.save();
    return new Response(200, {
      status: "Successful",
      Customer_Order: displayOrder,
    });
  } else {
      throw new ResponseError(400,'Order was not created')
  }
};
