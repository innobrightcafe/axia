import { User } from "../model/user.js";

export async function deleteUser(req, res) {
  try {
    const email = req.body.email;
    await User.deleteOne({ email });
    return res.status(201).send({ message: "Account deleted successfully" });
  } catch (error) {
    console.log({ message: error.message });
  }
}
