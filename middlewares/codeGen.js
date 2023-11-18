import { ALPHA } from "../config.js";
import { User } from "../model/user.js";

//test
function generator(number) {
  let result = "";
  for (let i = 0; i < number; i++) {
    result += ALPHA.charAt(Math.floor(Math.random() * ALPHA.length - 1));
  }
  return result;
}

export const check = async (req, res, next) => {
  const gen = generator(6);
  const result = await User.find({ refererCode: gen });
  console.log(result);

  if (result.length === 0) {
    return gen;
  } else {
    return check();
  }
};
