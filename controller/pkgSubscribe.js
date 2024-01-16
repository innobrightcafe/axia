import { User } from "../model/user.js";
import { timeGen } from "../middlewares/allocateTime.js";
import { timeout } from "../middlewares/timeout.js";

export const pkgSubscribe = async (req, res) => {
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

    const timeElapsed = await timeout(durSeconds);
    console.log("current Date: ", currentDate);
    console.log("expired Date: ", setDate);
    console.log("Elapsed Time", timeElapsed);

    const result = await User.find({ email });
    if (result && paid) {
      await User.findOneAndUpdate(
        { email },
        {
          $set: info,
        }
      );

      return res.send({ success: true, message: "New package subscribed." });
    } else {
      return res.send({ success: false, message: "User does not exist" });
    }
  } catch (error) {
    console.log({ message: error.message });
  }
};
