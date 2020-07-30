const { Response, ResponseError } = require("../utils/response");
const Vendor = require("../models/vendor");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.vendorsignUp = async (request) => {
  let { businessName, name, email, password, phone } = request.body;
  password = bcrypt.hashSync(request.body.password, 12);

  //check if user exist with same email
  let existVendor = await Vendor.findOne({ email: request.body.email });
  if (!existVendor) {
    // create new vendor
    let newVendor = new Vendor({
      businessName: businessName,
      name: name,
      email: email,
      password: password,
      phone: phone,
      role: 'Vendor'
    });

    let data = await newVendor.save();
    data = data.toJSON();
    delete data.password;

    const token = jwt.sign(payload, process.env.SECRETKEY);

    return new Response(200, {
      status: "Successful",
      responseMessage: {
        data,
        token,
      },
    });
  } else {
    throw new ResponseError(500, "User email already used");
  }
};

/**
 * customer sign up begins here
 */
exports.customerSignup = async (request) => {
  let { name, email, password, phone } = request.body;
  password = bcrypt.hashSync(request.body.password, 12);
  //check if customer have register with this email
  let customerExist = await Vendor.findOne({ email: request.body.email });
  if (!customerExist) {
    let newCustomer = new Vendor({
      name: name,
      email: email,
      password: password,
      phone: phone,
      role: 'Customer'
    });

    let customerData = await newCustomer.save();
    customerData = customerData.toJSON();
    delete customerData.password;

    return new Response(200, {
      status: "Succesful",
        response:{
          customerData
        }
    });
  } else {
    throw new ResponseError(400,"Customer not registered");
  }
};
/**
 * Customer sign up ends here
 */

exports.loginUser = async (request) => {

    var userLogin = await Vendor.findOne(
      { email: request.body.email },
      { delete: false }
    );
    if (!userLogin) {
      throw new ResponseError(400, "User do not exist");
    }
    if (!bcrypt.compareSync(request.body.password, userLogin.password)) {
      throw new ResponseError(400, "Password entered do not match");
    }
    const payload = {
      id:userLogin.id,
      name:userLogin.name,
      email:userLogin.email,
      phone:userLogin.phone,
      role:userLogin.role
     
    }
    const customerToken = jwt.sign(payload,process.env.SECRETKEY)
    console.log(userLogin)
    return new Response(200, ({
      status:'Login Successful',
      customer:userLogin,
      customer_Token:customerToken
    }));
   
};
