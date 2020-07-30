const { body, validationResult } = require("express-validator");

const { Response, ResponseError } = require("../utils/response");

const userValidateInputs = () => [
  body("email").isEmail().withMessage("Provide valid Email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 chars long"),
body('password').notEmpty().withMessage('password field cannot be empty'),
body('phone').isMobilePhone().withMessage('must  be a valid phone number')
]; //(request , response)=>{
//     const errors =  validateResult(request)
//     if(!errors.isEmpty){
//         return response.status(400).json({ errors: errors.array() });
//     }
// }


const validate = ((req, res, next) => {
  const errors = validationResult(req);
  
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = [];
  errors.array().map((err)=> extractedErrors.push({ [err.param] : err.msg}));
  return res.status(422).json({
      status:422,
      errors:extractedErrors
  })
});

module.exports = {
    userValidateInputs,
    validate
}