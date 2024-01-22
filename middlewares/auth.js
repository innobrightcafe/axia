import JWT from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../model/user.js";

dotenv.config();

export const authJwt = async (info) => {
  const token = await JWT.sign(info, process.env.TOKEN_SECRET);
  return token;
};

export const isAuth = async (req, res, next) => {
  // console.log(req.headers);
  try {
    if (req.headers && req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      // console.log(token);
      const decode = JWT.verify(token, process.env.TOKEN_SECRET);
      console.log("Decoded: ", decode);
      const user = await User.findOne({ email: decode.email });
      req.user = user;
      next();
    }
  } catch (error) {
    return res.status(404).send({ Authentication: error.message });
  }
};
