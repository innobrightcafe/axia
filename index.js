// imports...
import express from "express";
import bodyParser from "body-parser";
import { mongoDB, PORT } from "./config.js";
import mongoose from "mongoose";
import route from "./route/route.js";
import cors from "cors";

const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(route);

mongoose
  .connect(mongoDB)
  .then(() => {
    console.log(`Just connect to mongoDB`);
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    message: err.message;
  });
