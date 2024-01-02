import JWT from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authJwt = async (info) => {
  const token = await JWT.sign(info, process.env.TOKEN_SECRET);
  return token;
};
