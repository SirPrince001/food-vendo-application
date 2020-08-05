const router = require("express").Router();
const injector = require("../services/injector_request");
const Orders = require("../controllers/makeOrder");

router.post("api/v1/order", injector(Orders.Order));
module.exports = router;
