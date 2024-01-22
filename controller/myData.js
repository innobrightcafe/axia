import { User } from "../model/user.js";

// a function to obtain information from the database.
export const myData = async (req, res) => {
  const result = req.user;
  if (result) {
    return res.status(201).send(result);
  } else {
    return res
      .status(404)
      .send({ message: "Account not Registered, please sign up" });
  }
};
