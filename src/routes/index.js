const router = require("express").Router();

router.use(require("./auth"));
router.use(require("./menu"));
router.use(require('./order'))

module.exports = router;
