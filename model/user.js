import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  investmentAmount: { type: Number, default: 0 },
  ROI: { type: Number, default: 0 },
  capital: { type: Number, default: 0 },
  refererCode: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  investmentPackage: {
    type: String,
    default: "user",
  },
  hatchStatus: { type: String, default: "None" },
  interest: { type: Number, default: 0 },
  investmentPeriod: { type: Number, default: 0 },
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
});

export const User = mongoose.model("User", userSchema);
