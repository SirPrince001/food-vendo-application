const router = require("express").Router();

router.use(require("./auth"));
router.use(require("./menu"));

module.exports = router;
