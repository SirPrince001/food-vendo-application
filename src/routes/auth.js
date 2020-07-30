const router = require("express").Router();
const { userValidateInputs, validate } = require("../helper/validateInput");

const injector = require("../services/injector_request");
const signUp = require("../controllers/vendorController");
const login = require("../controllers/vendorController");
router.post(
  "/api/v1/vendorsignup",
  userValidateInputs(),
  validate,
  injector(signUp.vendorsignUp)
);
router.post(
  "/api/v1/signup",
  userValidateInputs(),
  validate,
  injector(signUp.customerSignup)
);
router.post("/api/v1/login", injector(login.loginUser));

module.exports = router;
