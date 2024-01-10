import { setTimeout } from "timers/promises";
import { User } from "../model/user.js";

const info = {
  investmentPackage: "user",
  status: "inactive",
  ROI: 0,
  investmentPeriod: 0,
  investmentDate: null,
  expiryDate: null,
};

async function deActiveTimeout(email) {
  const value = await User.find({ email });

  if (value.length > 0) {
    await User.findOneAndUpdate(
      { email },
      {
        $set: {
          investmentPackage: "user",
          status: "inactive",
          ROI: 0,
          investmentPeriod: 0,
          investmentDate: null,
          expiryDate: null,
        },
      }
    );
    return { message: "success" };
  }
  return { message: "Failed" };
}

export async function timeout(timeDiff, email) {
  console.log(info);
  if (!isNaN(timeDiff)) {
    await setTimeout(timeDiff);
    const result = await deActiveTimeout(email);
    return result;
  } else {
    console.error("duration provided is not a number.");
    return false;
  }
}
