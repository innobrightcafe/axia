import { body, validationResult } from "express-validator";

export const validateLogin = [
  body("email")
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage("Email field is Empty")
    .isEmail()
    .withMessage("Invalid Email"),
  body("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is Empty.")
    .isLength({ min: 8, max: 20 }),
];

export const loginResult = (req, res, next) => {
  console.log(req.body);
  const result = validationResult(req).array();
  if (!result.length) {
    next();
    return;
  }
  const error = result[0].msg;
  const val = {
    success: false,
    message: error,
  };
  console.log(result);
  console.log(req.body.email);
  return res.status(200).json(val);
};
