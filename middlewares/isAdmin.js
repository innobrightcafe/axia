import dotenv from "dotenv";

dotenv.config();

export async function validateAdmin(email) {
  if (email === process.env.Admin) {
    console.log("Admin.");
    return true;
  }
  return false;
}
