const router = require("express").Router();
const injector = require("../services/injector_request");
const menu = require("../controllers/createMenu");

router.post("/api/v1/create-menu", injector(menu.createMenu));
router.post("/api/v1/update-menu", injector(menu.updateMenu));

module.exports = router;
