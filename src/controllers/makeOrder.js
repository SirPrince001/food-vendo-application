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
      "Provide a token before you could make an order"
    );

    try {
      const verifyCustomer = jwt.verify(token, process.env.SECRETKEY);
  
      if (verifyCustomer.role === "Customer") {
        let {customerId, customer ,itemOrdered,
          
        } = request.body;
        let order = new CustomerOrder({
          customerId,
          customer, 
          itemOrdered,
          
        });
        let displayOrder = await order.save();
        return new Response(200, {
          status: "Successful",
          Customer_Order: displayOrder,
        });
      } 
      
    } catch (error) {
      throw new ResponseError(400,'Cannot not create Order')
    }
 
};
