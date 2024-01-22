import { User } from "../model/user.js";
import { timeGen } from "../middlewares/allocateTime.js";
import { timeout } from "../middlewares/timeout.js";
import { Package } from "../model/package.js";

export const pkgSubscribe = async (req, res) => {
  try {
    const pkg = req.query.package;
    const user = req.user;
    const duration = req.query.duration;
    const interest = req.query.interest;
    const amount = req.query.amount;
    const paid = true;
    const email = user.email;

    const { timeDiff, durSeconds, currentTime, setTime, currentDate, setDate } =
      timeGen(duration);

    if (user && paid) {
      await User.findOneAndUpdate(
        { email },
        {
          $set: {
            investmentPackage: pkg,
            status: "active",
            interest: interest,
            investmentPeriod: duration,
            investmentDate: currentDate,
            expiryDate: setDate,
          },
        }
      );

      res.send({ success: true, message: "You just subscribed." });
      await timeout(durSeconds, email, amount, interest);
    } else {
      return res.send({ success: false, message: "User does not exist" });
    }
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const pkgGet = async (req, res) => {
  const email = req.user.email;

  const value = await Package.find({ email });
  if (value.length > 0) {
    res.send(value);
    return;
  }
  return res.send({ success: false, message: "No admin Privileges" });
};
