import express from "express";
import { all } from "../controller/all.js";
import { login } from "../controller/login.js";
import { signup } from "../controller/signup.js";
import { deleteUser } from "../controller/delete.js";
import { pkgSubscribe } from "../controller/pkgSubscribe.js";
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

// declaring router
const router = express.Router();

// get router - endpoint to obtain all information
router.get("/all", all);

// get router - endpoint to obtain an information
router.get("/myData", myData);

// post router for sign up
router.post("/signup", validateSignUp, signUpResult, signup);

// post router for admin-sign up
router.post("/admin", adminValidator, adminValidationResult, admin);

// post router - endpoint to login
router.post("/login", validateLogin, loginResult, login);

// delete router
router.delete("/delete", validateDelete, deleteResult, deleteUser);

//update router - endpoint to update.
router.put("/investment/", pkgSubscribe);

export default router;
