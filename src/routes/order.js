const router = require("express").Router();
const injector = require("../services/injector_request");
const Orders = require("../controllers/makeOrder");
const viewOrders = require('../controllers/viewOrders')

router.post("/api/v1/order", injector(Orders.Order));
router.post("/api/v1/view-orders", injector(viewOrders.viewOrders));
module.exports = router;
