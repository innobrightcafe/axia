import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  investmentPackage: [
    {
      description: { type: String, default: "None" },
      packageName: { type: String, default: "None", unique: true },
      ROI: { type: Number, default: 0 },
      period: { type: Number, default: 0 },
    },
  ],
});

export const Package = mongoose.model("Package", packageSchema);
