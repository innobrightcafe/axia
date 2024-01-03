"use server";
import { connectToDB } from "./utils";
import { Packages, User } from "./models";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const fetchDataFromAPI = async () => {
  try {
    const apiUrl = `${process.env.APIURL}/myData`
    // Fetch data from API endpoint
    const Data = await fetch(apiUrl, {
      cache: "no-store",
    });
    const data = await Data.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error.message);
    throw new Error("API data fetching error");
  }
};


export const sendLoginData = async (event) =>  {
  event.preventDefault()
  try {
  const apiUrl = `${process.env.APIURL}/login`
  const formData = new FormData(event.target)
  const response = await fetch(apiUrl, {
    method: 'POST',
    body: formData,
  })

  // Handle response from API
  const data = await response.json()
  return data;
} catch(err) {
  console.log(data)
  console.error("Error fetching data from API:", err.message);
  throw new Error("API data fetching error");
}
}



export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, IsActive } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      IsActive,
    });
    await newUser.save(); // save to database
  } catch (err) {
    console.log(err);
    throw new Error("failed to add user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addPackages = async (formData) => {
  const { packageName, desc, amount, roi, period } =
    Object.fromEntries(formData);
  try {
    connectToDB();

    const newPackages = new Packages({
      packageName,
      desc,
      amount,
      roi,
      period,
    });
    await newPackages.save(); // save to database
  } catch (err) {
    console.log(err);
    throw new Error("failed to add this package!");
  }

  revalidatePath("/dashboard/package");
  redirect("/dashboard/package");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, IsActive } =
    Object.fromEntries(formData);
  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      IsActive,
    };

    Object.keys(updateFields).forEach(
      (key) => updateFields[key] === undefined && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields); // update user details in database
  } catch (err) {
    console.log(err);
    throw new Error("failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await User.findByIdAndDelete(id); // delet user from database
  } catch (err) {
    console.log(err);
    throw new Error("failed to delete user!");
  }

  revalidatePath("/dashboard/users");
};

export const deletePackage = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await Packages.findByIdAndDelete(id); // delet product from database
  } catch (err) {
    console.log(err);
    throw new Error("failed to delete package!");
  }

  revalidatePath("/dashboard/package");
  redirect("/dashboard/package");
};

export const updatePackage = async (formData) => {
  const { 
    id, 
    packageName,
    desc,
    amount,
    roi,
    period,
    isActive,
    createdAt
} =
    Object.fromEntries(formData);
  try {
    connectToDB();

    const updateFields = {
      packageName,
      desc,
      amount,
      roi,
      period,
      isActive,
      createdAt
    };

    Object.keys(updateFields).forEach(
      (key) => updateFields[key] === undefined && delete updateFields[key]
    );

    await Packages.findByIdAndUpdate(id, updateFields); // update user details in database
  } catch (err) {
    console.log(err);
    throw new Error("failed to update package!");
  }

  revalidatePath("/dashboard/package");
  redirect("/dashboard/package");
};



export const authenticateUser = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    const result = await signIn("credentials", { username, password });
    console.log(result);

  }catch(err){
    console.log(err);
    throw new Error("failed to login");
  }
}






// export const addDeposit = async (formData) => {
//   const { userId, amount, packageId, roi, period } =
//     Object.fromEntries(formData);
//   try {
//     connectToDB();

//     const newDeposit = new Deposit({
//       userId,
//       amount,
//       packageId,
//       roi,
//       period,
//     });
//     await newDeposit.save(); // save to database
//   } catch (err) {
//     console.log(err);
//     throw new Error("failed to add this deposit!");
//   }

//   revalidatePath("/dashboard/deposit");
//   redirect("/dashboard/deposit");
// }

// export const updateDeposit = async (formData) => {
//   const { id, userId, amount, packageId, roi, period, isActive, createdAt } =
//     Object.fromEntries(formData);
//   try {
//     connectToDB();

//     const updateFields = {
//       userId,
//       amount,
//       packageId,
//       roi,
//       period,
//       isActive,
//       createdAt
//     };

//     Object.keys(updateFields).forEach(
//       (key) => updateFields[key] === undefined && delete updateFields[key]
//     );

//     await Deposit.findByIdAndUpdate(id, updateFields); // update user details in database
//   } catch (err) {
//     console.log(err);
//     throw new Error("failed to update deposit!");
//   }

//   revalidatePath("/dashboard/deposit");
//   redirect("/dashboard/deposit");
// };

// export const deleteDeposit = async (formData) => {
//   const { id } = Object.fromEntries(formData);
//   try {
//     connectToDB();
//     await Deposit.findByIdAndDelete(id); // delet product from database
//   } catch (err) {
//     console.log(err);
//     throw new Error("failed to delete deposit!");
//   }

//   revalidatePath("/dashboard/deposit");
//   redirect("/dashboard/deposit");
// };

// export const addWithdrawal = async (formData) => {
//   const { userId, amount, packageId, roi, period } =
//     Object.fromEntries(formData);
//   try {
//     connectToDB();

//     const newWithdrawal = new Withdrawal({
//       userId,
//       amount,
//       packageId,
//       roi,
//       period,
//     });
//     await newWithdrawal.save(); // save to database
//   } catch (err) {
//     console.log(err);
//     throw new Error("failed to add this withdrawal!");
//   }

//   revalidatePath("/dashboard/withdrawal");
//   redirect("/dashboard/withdrawal");
// }

// export const updateWithdrawal = async (formData) => {
//   const { id, userId, amount, packageId, roi, period, isActive, createdAt } =
//     Object.fromEntries(formData);
//   try {
//     connectToDB();

//     const updateFields = {
//       userId,
//       amount,
//       packageId,
//       roi,
//       period,
//       isActive,
//       createdAt
//     };

//     Object.keys(updateFields).forEach(
//       (key) => updateFields[key] === undefined && delete updateFields[key]
//     );

//     await Withdrawal.findByIdAndUpdate(id, updateFields); // update user details in database
//   } catch (err) {
//     console.log(err);
//     throw new Error("failed to update withdrawal!");
//   }

//   revalidatePath("/dashboard/withdrawal");
//   redirect("/dashboard/withdrawal");
// };

// export const deleteWithdrawal = async (formData) => {
//   const { id } = Object.fromEntries(formData);
//   try {
//     connectToDB();
//     await Withdrawal.findByIdAndDelete(id); // delet product from database
//   } catch (err) {
//     console.log(err);
//     throw new Error("failed to delete withdrawal!");
//   }

//   revalidatePath("/dashboard/withdrawal");
//   redirect("/dashboard/withdrawal");
// };

// export const addReferral = async (formData) => {
//   const { userId, amount, packageId, roi, period } =
//     Object.fromEntries(formData);
//   try {
//     connectToDB();

//     const newReferral = new Referral({
//       userId,
//       amount,
//       packageId,
//       roi,
//       period,
//     });
//     await newReferral.save(); // save to database
//   } catch (err) {
//     console.log(err);
//     throw new Error("failed to add this referral!");
//   }

//   revalidatePath("/dashboard/referral");
//   redirect("/dashboard/referral");
// };

// export const updateReferral = async (formData) => {
//   const { id, userId, amount, packageId, roi, period, isActive, createdAt } =
//     Object.fromEntries(formData);
//   try {
//     connectToDB();

//     const updateFields = {
//       userId,
//       amount,
//       packageId,
//       roi,
//       period,
//       isActive,
//       createdAt
//     };

//     Object.keys(updateFields).forEach(
//       (key) => updateFields[key] === undefined && delete updateFields[key]
//     );

//     await Referral.findByIdAndUpdate(id, updateFields); // update user details in database
//   } catch (err) {
//     console.log(err);
//     throw new Error("failed to update referral!");
//   }

//   revalidatePath("/dashboard/referral");
//   redirect("/dashboard/referral");
// };

// export const deleteReferral = async (formData) => {
//   const { id } = Object.fromEntries(formData);
//   try {
//     connectToDB();
//     await Referral.findByIdAndDelete(id); // delet product from database
//   } catch (err) {
//     console.log(err);
//     throw new Error("failed to delete referral!");
//   }

//   revalidatePath("/dashboard/referral");
//   redirect("/dashboard/referral");
// };
