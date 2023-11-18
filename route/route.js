import express from "express";
import { all } from "../controller/all.js";
import { login } from "../controller/login.js";
import { signup } from "../controller/signup.js";
import { deleteUser } from "../controller/delete.js";
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

// declaring router
const router = express.Router();

// get router - endpoint to obtain all information
router.get("/all", all);

// post router for sign up
router.post("/signup", validateSignUp, signUpResult, signup);

// post router - endpoint to login
router.post("/login", validateLogin, loginResult, login);

// delete router
router.delete("/delete", validateDelete, deleteResult, deleteUser);

export default router;
