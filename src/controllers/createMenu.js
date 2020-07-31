const { Response, ResponseError } = require("../utils/response");
const Menu = require("../models/menu");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.createMenu = async (request) => {
  const token = request.get("Authorization");
  if (!token) throw new ResponseError(400, "Please provide token");
  let { name, description, price, quantity } = request.body;
  let vendorPayload = jwt.verify(token, process.env.SECRETKEY);
  if (vendorPayload.role === "Vendor") {
    let newMenu = new Menu({
      name: name,
      description: description,
      price: price,
      quantity: quantity,
    });
    let menuInfo = await newMenu.save();
    return new Response(200, {
      status: "Successful",
      menu: menuInfo,
    });
  } else {
    throw new ResponseError(400, "Unauthorize to create a menu");
  }
};

exports.updateMenu = async (request) => {
  const token = request.get("Authorization");
  if (!token)
    throw new ResponseError(
      400,
      "Please a valid token before you can a update a menu"
    );
  let { id, name, description, price, quantity } = request.body;
  let payload = jwt.verify(token, process.env.SECRETKEY);
  if (payload.role === "Vendor" && payload.id === id) {
      console.log(payload.id)
    let updatedMenu = await Menu.updateOne(
      { _id: id },{$addToSet:
      {
        name: name,
        description: description,
        price: price,
        quantity: quantity,
      } }
    );
    console.log(updatedMenu)
   //if(updatedMenu.nModified > 0)
    return new Response(200, {
      status: "Successful",
      updated_menu: updatedMenu
    });
  } else {
    throw new ResponseError(400, "Unauthorize , You cannot update menu");
  }
};
