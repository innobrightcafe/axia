import { body, validationResult } from "express-validator";
import { User } from "../../model/user.js";
import bcrypt from "bcrypt";

export const validateDelete = [
  body("email")
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage("Email field is Empty")
    .isEmail()
    .withMessage("Invalid Email")
    .custom(async (value, { req }) => {
      const result = await User.find({ email: value });
      if (result.length === 0) {
        throw new Error("Email does not exist, sign up.");
      }
    }),
  body("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is Empty.")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be at least 8 characters")
    .custom(async (value, { req }) => {
      const result = await User.find({
        email: req.body.email,
      });
      const authPass = result[0].password;
      const auth = await bcrypt.compare(value, authPass);

      console.log(auth);
      if (!auth) {
        throw new Error("Password Error");
      }
    })
    .withMessage("Password Error"),
];

export const deleteResult = (req, res, next) => {
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
