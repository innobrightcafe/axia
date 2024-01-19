import { User } from "../model/user.js";

// a function to obtain information from the database.
export const myData = async (req, res) => {
  const email = req.body.email;
  const result = await User.findOne({ email });

  if (result.length > 0) {
    return res.status(201).send(result);
  } else {
    return res
      .status(404)
      .send({ message: "Account not Registered, please sign up" });
  }
};
