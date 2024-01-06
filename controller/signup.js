import { User } from "../model/user.js";
import { Package } from "../model/package.js";
import bcrypt from "bcrypt";
import { ROUND } from "../config.js";
import { check } from "../middlewares/codeGen.js";
import { authJwt } from "../middlewares/auth.js";
import { validateAdmin } from "../middlewares/isAdmin.js";

export async function signup(req, res) {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const admin = await validateAdmin(email);

    //Admin query parameters
    const adminInfo = {
      username: username,
      email: email,
      password: password,
      isAdmin: admin,
    };

    // Token generation
    const tokenVal = { email };
    const token = await authJwt(tokenVal);
    console.log("Token: ", token);

    // String generation
    const gen = await check();
    console.log("Generated token: ", gen);

    // Validate admin
    console.log("Admin: ", admin);

    // Data storage structure.
    const infoVal = () => {
      if (admin) {
        const info = {
          username: username,
          email: email,
          password: password,
          refererCode: gen,
          isAdmin: admin,
        };
        return info;
      } else {
        const info = {
          username: username,
          email: email,
          password: password,
          refererCode: gen,
        };
        return info;
      }
    };

    const info = infoVal();

    bcrypt.hash(info.password, ROUND, async function (err, hash) {
      info["password"] = hash;
      adminInfo["password"] = hash;
      const value = await User.find({ email: email });
      if (value.length === 0) {
        await User.create(info);
        if (admin) {
          await Package.create(adminInfo);
        }
        return res.status(201).send({ message: "You just registered.", token });
      }
      return res.status(201).send({ message: "Already registered." });
    });
  } catch (err) {
    console.log(err.message);
  }
}
