import { setTimeout } from "timers/promises";

export async function timeout(timeDiff) {
  if (!isNaN(timeDiff)) {
    const res = await setTimeout(timeDiff, "Subscription has Elapsed");
    console.log("Result: ", res);
    return true;
  } else {
    console.error("Invalid BigInt value provided for timeout");
    return false;
  }
}
