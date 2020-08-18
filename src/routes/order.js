const router = require("express").Router();
const injector = require("../services/injector_request");
const Orders = require("../controllers/makeOrder");
const viewOrders = require('../controllers/viewOrders')
const trackOrders = require('../controllers/orderStatusController')

router.post("/api/v1/order", injector(Orders.Order));
router.post("/api/v1/vieworders", injector(viewOrders.viewOrders));
router.post("/api/v1/order-status", injector(trackOrders.OrderInfo));
module.exports = router;
