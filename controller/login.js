import { User } from "../model/user.js";
import bcrypt from "bcrypt";
import { authJwt } from "../middlewares/auth.js";

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide both email and password",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Invalid password" });
    }

    // Generate token
    const token = await authJwt({ email: user.email });

    if (!token) {
      return res.status(500).json({ success: false, message: "Token generation failed Internal server error" });
    }

    return res.status(200).json({ success: true, token });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}
