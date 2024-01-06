import { User } from "../model/user.js";
import { validateAdmin } from "../middlewares/isAdmin.js";
import { Package } from "../model/package.js";

export async function deleteUser(req, res) {
  try {
    const email = req.body.email;
    const admin = await validateAdmin(email);
    await User.deleteOne({ email });
    if (admin) {
      await Package.deleteOne({ email });
    }
    return res.status(201).send({ message: "Account deleted successfully" });
  } catch (error) {
    console.log({ message: error.message });
  }
}
