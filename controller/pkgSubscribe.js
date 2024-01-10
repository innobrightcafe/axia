import { User } from "../model/user.js";
import { timeGen } from "../middlewares/allocateTime.js";
import { timeout } from "../middlewares/timeout.js";

export const pkgSubscribe = async (req, res, next) => {
  try {
    const pkg = req.query.package;
    const email = req.body.email;
    const duration = req.query.duration;
    const ROI = req.query.ROI;
    const paid = true;

    const { timeDiff, durSeconds, currentTime, setTime, currentDate, setDate } =
      timeGen(duration);
    const info = {
      investmentPackage: pkg,
      status: "active",
      ROI: ROI,
      investmentPeriod: duration,
      investmentDate: currentDate,
      expiryDate: setDate,
    };

    const result = await User.find({ email });
    if (result && paid) {
      await User.findOneAndUpdate(
        { email },
        {
          $set: {
            investmentPackage: pkg,
            status: "active",
            ROI: ROI,
            investmentPeriod: duration,
            investmentDate: currentDate,
            expiryDate: setDate,
          },
        }
      );

      await timeout(durSeconds, email);
      return res.send({ success: true, message: "Subscription has Elapsed." });
    } else {
      return res.send({ success: false, message: "User does not exist" });
    }
  } catch (error) {
    console.log({ message: error.message });
  }
};
