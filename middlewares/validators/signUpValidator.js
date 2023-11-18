import { body, validationResult } from "express-validator";
import { User } from "../../model/user.js";

export const validateSignUp = [
  body("username")
    .trim()
    .not()
    .isEmpty()
    .withMessage("No username")
    .custom(async (value, { req }) => {
      const result = await User.find({ username: value });
      console.log(result);
      if (result.length !== 0) {
        throw new Error("Username already used.");
      }
      return true;
    }),
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
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be at least 8 characters"),
  body("confirmPassword")
    .trim()
    .not()
    .isEmpty()
    .withMessage("confirm Password field is Empty")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Both password must be same");
      }
      return true;
    }),
];

export const signUpResult = (req, res, next) => {
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
  console.log(req.body);
  return res.status(200).json(val);
};
