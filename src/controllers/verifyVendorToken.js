const jwt = require("jsonwebtoken");
const { Response, ResponseError } = require("../services/injector_request");
require("dotenv").config();

exports.verifyVToken = async (request, next) => {
  const token = request.get("Authorization");
  if (!token) throw new ResponseError(400, "Please provide token");
  let vendorPayload = jwt.verify(token, process.env.SECRETKEY);
  if (vendorPayload.role === "Vendor") {
    next();
  } else {
    throw new ResponseError(400, "Token not verified");
  }
};
