"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const fetchUsers = async () => {
  try {
    const apiUrl = `${process.env.APIURL}/all`;
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

export const fetchPackage = async () => {
  try {
    const apiUrl = `${process.env.APIURL}/all`;
    // Fetch data from API endpoint
    const Data = await fetch(apiUrl, {
      cache: "no-store",
    });

    const data = await Data.json();

    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error.message);
    throw new Error("API data fetching error");
  }
};

export const authenticateUser = async (formData) => {
  const username = formData.get("username");
  const password = formData.get("password");

  try {
    let urlEncoded = new URLSearchParams(formData).toString();

    console.log(formData);
    const apiUrl = `${process.env.APIURL}/login`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: urlEncoded,
    });

    const result = await response.json();
    console.log("result: ", result.success);
    !result.success === false && redirect("/usersdashboard");

    // result.success && redirect("/usersdashboard");
  } catch (err) {
    console.log(err);
    throw new Error("failed to login");
  }
};

export const addUser = async (formData) => {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  console.log(formData);

  try {
    // Create a user object
    // const newUser = {
    //   username,
    //   email,
    //   password,
    //   confirmPassword,
    // };
    const newUser = formData;
    const urlEncoded = new URLSearchParams(newUser).toString();

    console.log(newUser);
    // Send the user data to the API
    const apiUrl = `${process.env.APIURL}/signup`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: urlEncoded,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to add user. Server error: ${errorData.message}`);
    }
    // Handle response
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to add user");
  }
};

// export const sendLoginData = async (event) => {
//   event.preventDefault();
//   try {
//     const apiUrl = `${process.env.APIURL}/login`;
//     const formData = new FormData(event.target);
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       body: formData,
//     });

//     // Handle response from API
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.error("Error fetching data from API:", err.message);
//     throw err; // Re-throw the error
//   }
// };

// export const addUser = async (formData) => {
//   const { username, email, password } =
//     Object.fromEntries(formData);
//   try {
//     const apiUrl = `${process.env.APIURL}/signup`;
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       body: formData,
//     });
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
//     const newUser = new FormData({
//       username,
//       email,
//       password: hashedPassword,
//       confirmpassword: hashedPassword,
//     });
//     await newUser.save(); // save to database
//   } catch (err) {
//     console.log(err);
//     throw new Error("failed to add user!");
//   }

//   revalidatePath("/dashboard/users");
//   redirect("/dashboard/login");
// };

export const userRegistration = async (formData) => {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  try {
    if (!password || !confirmPassword || !email || !username) return;

    // Create a user object
    const newUser = {
      username,
      email,
      password,
      confirmPassword,
    };
    // Send the user data to the API
    const apiUrl = `${process.env.APIURL}/signup`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error("Failed to connect to API. Please try again.");
    }
    // Handle response
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
    throw new Error("failed to register user!");
  }
};

// export const onSubmit = async (event, setIsLoading, setError) => {
//   event.preventDefault();
//   setIsLoading(true); // Set loading to true when the request starts
//   setError(null); // Clear previous errors when a new request starts

//   console.log("Form Data:", formData);

//   try {
//     const apiUrl = `${process.env.APIURL}/signup`;
//     const formData = new FormData(event.currentTarget);
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       body: formData,
//     });

//     if (!response.ok) {
//       throw new Error("Failed to submit the data. Please try again.");
//     }

//     // Handle response if necessary
//     const data = await response.json();
//     // ...
//   } catch (error) {
//     setError(error.message);
//     console.error(error);
//   } finally {
//     setIsLoading(false); // Set loading to false when the request completes
//   }
//   revalidatePath("/dashboard/users");
//   redirect("/dashboard/login");
// };

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
  const { id, packageName, desc, amount, roi, period, isActive, createdAt } =
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
      createdAt,
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

export const signOut = async () => {
  try {
    const apiUrl = `${process.env.APIURL}/logout`;

    const Data = await fetch(apiUrl, {
      method: "DELETE",
    });
    const data = await Data.json();

    return data;
  } catch (err) {
    console.error("Logout error:", err);
    throw new Error("Logout error");
  }
};

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
