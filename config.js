import dotenv from "dotenv";
dotenv.config();
export const PORT = 4000;

export const mongoDB = process.env.MONGO_URI;
export const ROUND = 8;
export const ALPHA =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
