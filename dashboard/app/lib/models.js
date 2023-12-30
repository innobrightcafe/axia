import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 20,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      min: 10,
      max: 20,
    },
    address: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { Timestamp: true }
);

const packagesSchema = new Schema(
  {
    packageName: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    roi: {
      type: Number,
      required: true,
      min: 0,
    },
    period: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: null,
    },
  },
  { Timestamp: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Packages = mongoose.models.Packages || mongoose.model("Packages", packagesSchema);
