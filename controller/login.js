import { User } from "../model/user.js";
import bcrypt from "bcrypt";

export async function login(req, res) {
  try {
    console.log(req.body);
    if (!req.body.password || !req.body.email) {
      return res.status(400).send({
        msg: "send all required fields: email, password",
        success: false,
      });
    }

    const pass = req.body.password;
    const value = await User.find({ email: req.body.email });

    if (value.length > 0) {
      const authPass = value[0].password;
      try {
        const result = await bcrypt.compare(pass, authPass);
        if (result) {
          return res.status(200).send({ success: true });
        } else {
          return res.status(400).send({ success: false });
        }
      } catch (error) {
        return res.status(500).send({ msg: error.message });
      }
    }
    return res.status(401).send({ message: "Please signup" });
  } catch (error) {
    // console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}
