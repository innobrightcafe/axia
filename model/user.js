import { Timestamp } from "mongodb";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  balance: { type: Number, default: 0 },
  refererCode: { type: String, required: true },
  investmentPackage: {
    type: String,
    enum: [
      "user",
      "Auto_Trading_I",
      "Gold_I",
      "Gold_II",
      "Real_Estate_I",
      "Real_Estate_II",
    ],
    default: "user",
  },
  ROI: { type: Number, default: 0 },
  investmentPeriod: { type: Number, enum: [0, 3, 6, 12] },
  investmentDate: { type: String, default: null },
  status: { type: String, enum: ["active", "inactive"], default: "inactive" },
  referredBy: {
    ref_id: { type: Schema.Types.ObjectId, ref: "User" },
  },
  referred: [
    {
      ref_id: { type: Schema.Types.ObjectId, ref: "User" },
    },
  ],
  expiryDate: { type: String, default: null },
  withdrawalInfo: [
    {
      withdrawalAmount: { type: Number, default: 0 },
      withdrawalDate: { type: Date, default: null },
    },
  ],
},
{ Timestamp: true }
);

export const User = mongoose.model("User", userSchema);
