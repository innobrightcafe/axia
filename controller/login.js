import { User } from "../model/user.js";
import bcrypt from "bcrypt";
import { authJwt } from "../middlewares/auth.js";

export async function login(req, res) {
  try {
    const email = req.body.email;
    console.log(req.body);
    if (!req.body.password || !req.body.email) {
      return res.status(400).send({
        msg: "send all required fields: email, password",
        success: false,
      });
    }

    const pass = req.body.password;
    const value = await User.find({ email: req.body.email });

    // Token generation
    const tokenVal = { email };
    const token = await authJwt(tokenVal);
    console.log("Token: ", token);

    if (value.length > 0) {
      const authPass = value[0].password;
      try {
        const result = await bcrypt.compare(pass, authPass);
        if (result) {
          return res.status(200).send({ success: true, Token: token });
        } else {
          return res
            .status(400)
            .send({ success: false, message: "Incorrect Password" });
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
