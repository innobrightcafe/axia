import { User } from "../model/user.js";

export const all = async (req, res) => {
  try {
    const result = await User.find();
    return res.status(201).send(result);
  } catch (error) {
    console.log(error.message);
  }
};
