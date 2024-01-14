import { calc } from "../controller/InvestmentReturns.js";
import { User } from "../model/user.js";
import { hatch, hatched } from "./hatch.js";

async function deActiveTimeout(email) {
  const value = await User.find({ email });

  if (value.length > 0) {
    await User.findOneAndUpdate(
      { email },
      {
        $set: {
          investmentPackage: "user",
          status: "inactive",
          investmentPeriod: 0,
          investmentDate: null,
          expiryDate: null,
          balance: 0,
        },
      }
    );
    return true;
  }
  return false;
}

async function updateBalance(email, amount) {
  // Check if the user exist
  const userAccount = await User.find({ email });
  // console.log(userAccount);

  // amount += userAccount[0].ROI;
  const valueROI = userAccount[0].ROI;
  const value = valueROI + Math.round(amount * 1000) / 1000;
  console.log("Value ROI: ", valueROI);

  if (userAccount.length > 0) {
    await User.findOneAndUpdate({ email }, { $set: { ROI: value } });
  }
}

export async function timeout(timeDiff, email, amount, ROI) {
  const dayMin = 60 * 1000;
  const dayHr = 60 * 60 * 1000;
  const day = timeDiff / (24 * dayHr);
  const minRoi = day * 24 * 60;
  var cumAmount = 0;
  var timeFinal = 0;

  console.log("Day: ", day);
  console.log("MinRoi: ", minRoi);

  if (!isNaN(timeDiff)) {
    await hatch(email);
    // Set Interval
    const timeInterval = setInterval(async () => {
      timeFinal += dayMin;

      // Calculate ROI per day
      const amountPerDay = calc(amount, ROI, minRoi);
      cumAmount += amountPerDay;

      // Update the amount based on interest.
      await updateBalance(email, cumAmount);
      console.log("Wait...");
      console.log("Initial Amount: ", amount);
      console.log("ROI: ", ROI);
      console.log("Cumulative Amount: ", cumAmount);
      console.log("Amount Per Day: ", amountPerDay);
      console.log("perMin: ", minRoi);

      // End the setInterval
      if (timeFinal >= timeDiff) {
        await deActiveTimeout(email);
        await hatched(email);
        timeFinal = 0;
        cumAmount = 0;
        clearInterval(timeInterval);
      }
    }, dayMin);
  } else {
    console.log("duration provided is not a number.");
  }
}
