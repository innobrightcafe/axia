import { body, validationResult } from "express-validator";
import { Package } from "../../model/package.js";

export const adminValidator = [
  body("email")
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage("Email field is Empty")
    .isEmail()
    .withMessage("Invalid Email"),
  body("description")
    .trim()
    .exists()
    .withMessage("Description is missing")
    .not()
    .isEmpty()
    .withMessage("No Package Description?"),
  body("packageName")
    .trim()
    .exists()
    .withMessage("Package Name is missing")
    .not()
    .isEmpty()
    .withMessage("No Package Name ?")
    .custom(async (value, { req }) => {
      const searchValue = await Package.find({
        investmentPackage: {
          $elemMatch: { packageName: req.body.packageName },
        },
      });
      //   console.log("Package Name Search: ", searchValue);
      if (searchValue.length !== 0) {
        throw new Error("Package Name is already Existing");
      } else if (searchValue.length === 0) {
        return true;
      }
    }),
  body("ROI")
    .trim()
    .exists()
    .withMessage("ROI value is missing")
    .not()
    .isEmpty()
    .withMessage("No ROI? ")
    .custom((value, { req }) => {
      if (isNaN(value)) {
        throw new Error("Value is not a number");
      }
      return true;
    }),
  body("period")
    .trim()
    .exists()
    .withMessage("Investment Period/Duration is missing")
    .not()
    .isEmpty()
    .withMessage("No ? ")
    .custom((value, { req }) => {
      if (isNaN(value)) {
        throw new Error("Investment value provided is not a number");
      }
      return true;
    }),
];

export const adminValidationResult = (req, res, next) => {
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
  return res.status(200).json(val);
};
