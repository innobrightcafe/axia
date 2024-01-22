import express from "express";
import { all } from "../controller/all.js";
import {
  withdrawROI,
  withdrawSeed,
  moveFundsToBal,
} from "../controller/withdraw.js";
import { login } from "../controller/login.js";
import { signup } from "../controller/signup.js";
import { deleteUser } from "../controller/delete.js";
import { pkgSubscribe, pkgGet } from "../controller/pkgSubscribe.js";
import { myData } from "../controller/myData.js";
import { admin } from "../controller/admin.js";
import {
  validateLogin,
  loginResult,
} from "../middlewares/validators/loginValidator.js";
import {
  validateSignUp,
  signUpResult,
} from "../middlewares/validators/signUpValidator.js";
import {
  validateDelete,
  deleteResult,
} from "../middlewares/validators/deleteValidator.js";
import {
  adminValidator,
  adminValidationResult,
} from "../middlewares/validators/adminInput.js";
import { isAuth } from "../middlewares/auth.js";
// declaring router
const router = express.Router();

// get router - endpoint to obtain all information
router.get("/all", all);

// get router - endpoint to obtain an information
router.get("/myData", isAuth, myData);

//Get router - get investment packages.
router.get("/investmentPackage", isAuth, pkgGet);

// post router for sign up
router.post("/signup", validateSignUp, signUpResult, signup);

// post router for admin-sign up
router.post("/admin", adminValidator, adminValidationResult, admin);

// post router - endpoint to login
router.post("/login", validateLogin, loginResult, login);

// delete router
router.delete("/delete", validateDelete, deleteResult, isAuth, deleteUser);

//update router - endpoint to update.
router.put("/investment/", isAuth, pkgSubscribe);

// Withdraw route
router.put("/withdrawROI", isAuth, withdrawROI);

// Withdraw route
router.put("/withdrawSeed", isAuth, withdrawSeed);

// Withdraw route
router.put("/ROItoBal", isAuth, moveFundsToBal);

export default router;
