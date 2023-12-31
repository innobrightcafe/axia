// imports...
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import route from "./route/route.js";
import cors from "cors";

dotenv.config();
const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/", route);

const PORT = process.env.PORT || 10000;

try {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    // useNewUrl: true,
    useUnifiedTopology: true,
  });
  console.log(`Mongoose Connected: ${conn.connection.host}`);
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });
} catch (err) {
  console.log(err.message);
}
