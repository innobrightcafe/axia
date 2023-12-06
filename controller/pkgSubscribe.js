import { User } from "../model/user.js";
import { timeGen } from "../middlewares/allocateTime.js";

export const pkgSubscribe = async (req, res) => {
  try {
    const pkg = req.query.package;
    const email = req.body.email;
    const duration = req.query.duration;
    const paid = true;
    // console.log(typeof duration);

    const { timeDiff, currentTime, setTime, currentDate, setDate } =
      timeGen(duration);
    const info = {
      investmentPackage: pkg,
      status: "active",
      investmentPeriod: duration,
      investmentDate: currentDate,
      expiryDate: setDate,
    };

    console.log("current Date: ", currentDate);
    console.log("expired Date: ", setDate);
    console.log(typeof currentTime);

    const result = await User.find({ email });
    if (result && paid) {
      await User.findOneAndUpdate(
        { email },
        {
          $set: {
            investmentPackage: pkg,
            status: "active",
            investmentPeriod: duration,
            investmentDate: currentDate,
            expiryDate: setDate,
          },
        }
      );
      // setTimeout(async () => {
      //   await User.updateOne(
      //     { email },
      //     {
      //       $pull: { info },
      //     }
      //   );
      // }, timeDiff);
      return res.send({ success: true, message: "New package subscribed." });
    } else {
      return res.send({ success: false, message: "User does not exist" });
    }
  } catch (error) {
    console.log({ message: error.message });
  }
};
