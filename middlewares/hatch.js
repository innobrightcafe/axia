import { User } from "../model/user.js";

export const hatch = async (email) => {
  const result = await User.find({ email });
  if (result.length > 0) {
    await User.findOneAndUpdate(
      { email },
      { $set: { hatchStatus: "Hatching" } }
    );
  }
};

export const hatched = async (email) => {
  const result = await User.find({ email });
  if (result.length > 0) {
    await User.findOneAndUpdate(
      { email },
      { $set: { hatchStatus: "Hatched" } }
    );
  }
};
