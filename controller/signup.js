import { User } from "../model/user.js";
import bcrypt from "bcrypt";
import { ROUND } from "../config.js";
import { check } from "../middlewares/codeGen.js";
import { authJwt } from "../middlewares/auth.js";

export async function signup(req, res) {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    // Token generation
    const tokenVal = { email };
    const token = await authJwt(tokenVal);
    console.log("Token: ", token);

    // String generation
    const gen = await check();

    // Data storage structure.
    const info = {
      username: username,
      email: email,
      password: password,
      refererCode: gen,
    };

    bcrypt.hash(info.password, ROUND, async function (err, hash) {
      info["password"] = hash;
      console.log(info.password);
      const value = await User.find({ email: email });
      if (value.length === 0) {
        await User.create(info);
        return res.status(201).send({ message: "You just registered.", token });
      }
      return res.status(201).send({ message: "Already registered." });
    });
  } catch (err) {
    console.log(err.message);
  }
}
