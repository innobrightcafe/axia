import { User } from "../model/user.js";
import bcrypt from "bcrypt";

export const ROIUpdate = async (email, moneyLeft) => {
  const value = await User.find({ email });
  try {
    if (value.length > 0) {
      await User.findOneAndUpdate({ email }, { $set: { ROI: moneyLeft } });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const balanceUpdate = async (email, moneyLeft) => {
  const value = await User.find({ email });
  try {
    if (value.length > 0) {
      await User.findOneAndUpdate({ email }, { $set: { balance: moneyLeft } });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const withdrawROI = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const withdrawAmount = req.body.withdrawAmount;

  // find email account in the database
  const value = await User.find({ email });

  //compare password parsed.
  const authPass = await bcrypt.compare(password, value[0].password);

  try {
    if (value.length > 0 && authPass) {
      var amount = value[0].ROI;

      // check if the withdraw amount is less than or equal to amount in the Db
      if (withdrawAmount <= amount) {
        const moneyLeft = amount - withdraw;
        // withdraw and update the database.
        await ROIUpdate(email, moneyLeft);
      } else {
        return res.send({ message: "Insufficient Balance." });
      }
      console.log("Amount to withdraw: ", amount);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const withdrawSeed = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const withdrawAmount = req.body.withdrawAmount;

  // find email account in the database
  const value = await User.find({ email });

  //compare password parsed.
  const authPass = await bcrypt.compare(password, value[0].password);

  try {
    if (value.length > 0 && authPass) {
      var amount = value[0].balance;

      // check if the withdraw amount is less than or equal to amount in the Db
      if (withdrawAmount <= amount) {
        const moneyLeft = amount - withdraw;
        // withdraw and update the database.
        await balanceUpdate(email, moneyLeft);
      } else {
        return res.send({ message: "Insufficient Balance." });
      }
      console.log("Amount to withdraw: ", amount);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const moveFundsToBal = async (req, res) => {
  const email = req.query.email;
  const amount = req.query.amount;
  const value = await User.find({ email });

  try {
    if (value.length > 0) {
      //check if ROI has funds
      if (value[0].ROI > 0) {
        if (value[0].ROI >= amount) {
          const changeROI = value[0].ROI - amount;
          const changeBal =
            parseFloat(amount) + parseFloat(value[0].investmentAmount);

          await User.findOneAndUpdate(
            { email },
            { $set: { investmentAmount: changeBal, ROI: changeROI } }
          );
          return res.send({ message: "Transaction Successful." });
        } else {
          return res.send({ message: "Insufficient Balance." });
        }
      } else {
        return res.send({ message: "Zero Balance" });
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};
