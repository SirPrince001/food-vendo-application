const router = require("express").Router();
const injector = require("../services/injector_request");
const menu = require("../controllers/createMenu");
//const verify = require('../controllers/verifyVendorToken')

router.post("/api/v1/create-menu", injector(menu.createMenu));
router.post("/api/v1/update-menu/:id",injector(menu.updateMenu));

module.exports = router;
