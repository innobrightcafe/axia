"use server";
import { redirect } from "next/navigation";
import Cookies from 'js-cookie'; 
import { AuthError } from 'next-auth';


const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${process.env.APIURL}/login`, credentials);
    const { token } = response.data; // Assuming your API returns a token
    Cookies.set('token', token); // Store the token in cookies
  } catch (error) {
    console.error('Failed to login:', error);
    throw new Error('Failed to login.');
  }
};
export const authenticate = async (prevState, formData) => {
  try {
    let urlEncoded = new URLSearchParams(formData).toString();
 
    const apiUrl = `${process.env.APIURL}/login`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: urlEncoded,
    });

    const result = await response.json(); 
    
  } catch (error) {if (error instanceof AuthError) {
    switch (error.type) {
      case 'CredentialsSignin':
        return 'Invalid credentials.';
      default:
        return 'Something went wrong.';
    }
  }
  throw error;
}
}



 

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, 'i');
  const PAGE_ITEM = 4;
  try {
    const apiUrl = `${process.env.APIURL}/myData`;
    const token = Cookies.get('token');
    const authToken =  `JWT ${token}`; 
    // Fetch data from API endpoint
    const res = await fetch(apiUrl, {
      headers: {
        Authorization: authToken,
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(`Failed to fetch data from API: ${errorData.message}`);
    }

    if (!Array.isArray(data)) {
      throw new Error('Response data is not an array');
    }
    
    const data = await res.json({username: { $regex: regex } }); 
    console.log(data);
    const filterUsers = data.filter((user) => regex.test(user.username));
     
    const totalPage = Math.ceil(filterUsers.length / PAGE_ITEM);
    const paginatedData = filterUsers.slice((page - 1) * PAGE_ITEM, page * PAGE_ITEM);
    return { paginatedData, totalPage };
  } catch (error) {
    console.error('Error fetching data from API:', error.message);
    throw new Error('API data fetching error');
  }
};

// export const updateUsers = async (id, formData) => {
//   try {
//     const apiUrl = `${process.env.APIURL}/all/${id}`;  
//     const updateFields = Object.fromEntries(Object.entries(formData).filter(([_, v]) => v !== '' && v !== undefined));
//     console.log(updateFields);
//     const response = await fetch(apiUrl, {
//       method: 'PUT',  
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updateFields),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(`Failed to update user. Server error: ${errorData.message}`);
//     }

//     const result = await response.json();
//     console.log(result);

//     return { id, updateFields };
//   } catch (error) {
//     console.error('Error updating user data:', error.message);
//     throw new Error('User data update error');
//   }
   
// };


// export const fetchPackage = async (q, page) => { 
//   const regex = new RegExp(q, 'i');
//   const PAGE_ITEM = 4;
//   try {
//     const admin = 'innobrightcafe@gmail.com'
//     const apiUrl = `${process.env.APIURL}/all`;
//     // Fetch data from API endpoint
//     const res = await fetch(apiUrl,)

//     const data = await res.json({packageName: { $regex: regex } }); 
     

//     const filterPackage = data.filter((pkg) => regex.test(pkg.packageName));
     
//     const totalPage = Math.ceil(filterPackage.length / PAGE_ITEM);
//     const paginatedData = filterPackage.slice((page - 1) * PAGE_ITEM, page * PAGE_ITEM);
//     return { paginatedData, totalPage };
//   } catch (error) {
//     console.error("Error fetching data from API:", error.message);
//     throw new Error("API data fetching error");
//   }
// };

// export const addPackage = async (formData) => {  

//   console.log(formData);

//   try {
//     const newPackage = formData;
//     const urlEncoded = new URLSearchParams(newPackage).toString();
     
//     // Send the user data to the API
//     const apiUrl = `${process.env.APIURL}/myData`;
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: urlEncoded,
//     }); 
//     const result = await response.json();
//     return result;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to add package");
//   }
// };


// export const fetchROItoBal = async (email) => {
//   try {
//     const apiUrl = `${process.env.APIURL}/myData?email=${email}`;
   
//     // Fetch data from API endpoint
//     const Data = await fetch(apiUrl, {
//       cache: "no-store",
//     });
//     const data = await Data.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching data from API:", error.message);
//     throw new Error("API data fetching error");
//   }
// };





// // export const fetchUsersByID = async (id) => {
// //   try {
// //     const apiUrl = `${process.env.APIURL}/all/${id}`;
// //     // Fetch data from API endpoint
// //     const res = await fetch(apiUrl);
// //     const users = await res.json();
// //       // Find the user with the specified ID
// //     const user = users.find(_id);
// //     return user;
// //   } catch (error) {
// //     console.error("Error fetching data from API:", error.message);
// //     throw new Error("API data fetching error");
// //   }
// // };



 



// // export const fetchPackage = async () => {
// //   const email = "innobrightcafe@gmail.com";

// //   try {
// //     const apiUrl = `${process.env.APIURL}/investmentPackage`;

// //     const response = await fetch(apiUrl, {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/x-www-form-urlencoded",
// //       },
// //       body: new URLSearchParams({ email }), 
// //     });

// //     console.log("Response Status Code:", response.status);
    
// // const resultText = await response.text();
// // console.log("Response Text:", resultText);
// // const result = await response.json();
// // console.log("Parsed JSON:", result);

// //     return result;
// //   } catch (error) {
// //     console.error("Error fetching data from API:", error.message);
// //     throw new Error("API data fetching error");
// //   }
// // };



// // export const fetchPackage = async () => {
// //   const email = "Innobrightcafe@gmail.com";

// //   try {
    
// //     let urlEncoded = new URLSearchParams(email)
// //     console.log(email);
// //     const apiUrl = `${process.env.APIURL}/investmentPackage`;
// //     const response = await fetch(apiUrl, {
// //       method: "GET",
// //       headers: {
// //         "Content-Type": "application/x-www-form-urlencoded",
// //       },
// //       body: email,
// //     });
// //     const result = await response.json(); 

// //     console.log(result);

// //     return result;
// //   } catch (error) {
// //     console.error("Error fetching data from API:", error.message);
// //     throw new Error("API data fetching error");
// //   }
// // };


export const authenticateUser = async (formData, cookies) => {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    // Get token from cookie
    const token = cookies.token || '';
    let urlEncoded = new URLSearchParams(formData).toString();
 
    const apiUrl = `${process.env.APIURL}/login`;
    //send token as a header to the login api
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
      body: urlEncoded,
    });

    const result = await response.json();
    console.log("result: ", result);
    // if (result && result.success) { 
    //   Cookies.set("token", result.token, { expires: 1}); 
    // } else {
    //   console.error("User login failed:", result);
    // }
    
    // return result;
    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }
    return result;


  } catch (err) {
    console.error(err);
    throw new Error(err.message || "Failed to login check your detals");
  }
};



// export const authenticateUser = async (formData) => {
//   const username = formData.get("email");
//   const password = formData.get("password");

//   try {
//     let urlEncoded = new URLSearchParams(formData).toString();

//     console.log(formData);
//     const apiUrl = `${process.env.APIURL}/login`;
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: urlEncoded,
//     });
// // result.success && redirect("/usersdashboard");
//     const result = await response.json();
//     console.log("result: ", result.success);
//     !result.success === false && <Redirects url='/usersdashboard' />;

    
//   } catch (err) {
//     console.log(err);
//     throw new Error("failed to login");
//   }
// };

// utils/api.js

// utils/api.js

export const addUser = async (formData) => {
  try {
    const urlEncoded = new URLSearchParams(formData).toString();
    console.log(formData);

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
    console.log(response);

    const result = await response.json();
    console.log("result: ", result.success);

    if (result && result.success) {
      // Return the token received from the server
      return { success: result.success, token: result.token };
    } else {
      console.error("User registration failed:", result);
      throw new Error(result.message || "User registration failed. Please try again.");
    }
  } catch (err) {
    console.error('Error adding user:', err);
    throw new Error( err.message );
  }
};

export const getToken = () => {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('token=')) {
      return cookie.substring(6);
    }
  }
  return null;
};


// export const addUser = async (previousState, formData, setError, setSuccess) => {
//   try {
//     const urlEncoded = new URLSearchParams(formData).toString();

//     // Send the user data to the API
//     const apiUrl = `${process.env.APIURL}/signup`;
//     const response = await fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: urlEncoded,
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(`Failed to add user. Server error: ${errorData.message}`);
//     }

//     const result = await response.json();
//     console.log("result: ", result.success);

//     if (result && result.success) {
//       setSuccess("Registration was successful.");
//     } else {
//       console.error("User registration failed:", result);
//       setError(result.message || "User registration failed. Please try again.");
//     }

//     return result;
//   } catch (err) {
//     console.error(err);
//     setError("Failed to add user");
//   }
// };









// // export const addUser = async (previousState, formData) => {
// //   try {
// //     const urlEncoded = new URLSearchParams(formData).toString();

// //     // Send the user data to the API
// //     const apiUrl = `${process.env.APIURL}/signup`;
// //     const response = await fetch(apiUrl, {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/x-www-form-urlencoded",
// //       },
// //       body: urlEncoded,
// //     });

// //     if (!response.ok) {
// //       const errorData = await response.json();
// //       throw new Error(`Failed to add user. Server error: ${errorData.message}`);
// //     }

// //     const result = await response.json();
// //     console.log("result: ", result.success);

// //     if (result && result.success) {
// //       redirect("/login");
// //     } else {
// //       console.error("User registration failed:", result); 
// //     }
// //   } catch (err) {
// //     console.error(err); 
// //   }
// // };



// // export const addUser = async (formData) => { 
// //   console.log(formData);
  

// //   try {
// //     const newUser = formData;
// //     const urlEncoded = new URLSearchParams(newUser).toString();

// //     console.log(newUser);
// //     // Send the user data to the API
// //     const apiUrl = `${process.env.APIURL}/signup`;
// //     const response = await fetch(apiUrl, {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/x-www-form-urlencoded",
// //       },
// //       body: urlEncoded,
// //     });

// //     if (!response.ok) {
// //       const errorData = await response.json();
// //       throw new Error(`Failed to add user. Server error: ${errorData.message}`);
// //     }
    

// //     // result.success && redirect("/usersdashboard");
// //     const result = await response.json();
// //     console.log("result: ", result.success); 
// //     if (result.success) { 
// //       redirect('/usersdashboard');
// //     }

// //   } catch (err) {
// //     console.log(err);
// //     throw new Error("Failed to add user");
// //   }
  
// // };






// // export const sendLoginData = async (event) => {
// //   event.preventDefault();
// //   try {
// //     const apiUrl = `${process.env.APIURL}/login`;
// //     const formData = new FormData(event.target);
// //     const response = await fetch(apiUrl, {
// //       method: "POST",
// //       body: formData,
// //     });

// //     // Handle response from API
// //     const data = await response.json();
// //     console.log(data);
// //     return data;
// //   } catch (err) {
// //     console.error("Error fetching data from API:", err.message);
// //     throw err; // Re-throw the error
// //   }
// // };

// // export const addUser = async (formData) => {
// //   const { username, email, password } =
// //     Object.fromEntries(formData);
// //   try {
// //     const apiUrl = `${process.env.APIURL}/signup`;
// //     const response = await fetch(apiUrl, {
// //       method: "POST",
// //       body: formData,
// //     });
// //     const salt = await bcrypt.genSalt(10);
// //     const hashedPassword = await bcrypt.hash(password, salt);
// //     const newUser = new FormData({
// //       username,
// //       email,
// //       password: hashedPassword,
// //       confirmpassword: hashedPassword,
// //     });
// //     await newUser.save(); // save to database
// //   } catch (err) {
// //     console.log(err);
// //     throw new Error("failed to add user!");
// //   }

// //   revalidatePath("/dashboard/users");
// //   redirect("/dashboard/login");
// // };

// // export const userRegistration = async (formData) => {
// //   const username = formData.get("username");
// //   const email = formData.get("email");
// //   const password = formData.get("password");
// //   const confirmPassword = formData.get("confirmPassword");
// //   try {
// //     if (!password || !confirmPassword || !email || !username) return;

// //     // Create a user object
// //     const newUser = {
// //       username,
// //       email,
// //       password,
// //       confirmPassword,
// //     };
// //     // Send the user data to the API
// //     const apiUrl = `${process.env.APIURL}/signup`;
// //     const response = await fetch(apiUrl, {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(newUser),
// //     });

// //     if (!response.ok) {
// //       throw new Error("Failed to connect to API. Please try again.");
// //     }
// //     // Handle response
// //     const result = await response.json();
// //     return result;
// //   } catch (err) {
// //     console.log(err);
// //     throw new Error("failed to register user!");
// //   }
// // };

// // export const onSubmit = async (event, setIsLoading, setError) => {
// //   event.preventDefault();
// //   setIsLoading(true); // Set loading to true when the request starts
// //   setError(null); // Clear previous errors when a new request starts

// //   console.log("Form Data:", formData);

// //   try {
// //     const apiUrl = `${process.env.APIURL}/signup`;
// //     const formData = new FormData(event.currentTarget);
// //     const response = await fetch(apiUrl, {
// //       method: "POST",
// //       body: formData,
// //     });

// //     if (!response.ok) {
// //       throw new Error("Failed to submit the data. Please try again.");
// //     }

// //     // Handle response if necessary
// //     const data = await response.json();
// //     // ...
// //   } catch (error) {
// //     setError(error.message);
// //     console.error(error);
// //   } finally {
// //     setIsLoading(false); // Set loading to false when the request completes
// //   }
// //   revalidatePath("/dashboard/users");
// //   redirect("/dashboard/login");
// // };

// // export const addPackages = async (formData) => {
// //   const { packageName, desc, amount, roi, period } =
// //     Object.fromEntries(formData);
// //   try {
// //     connectToDB();

// //     const newPackages = new Packages({
// //       packageName,
// //       desc,
// //       amount,
// //       roi,
// //       period,
// //     });
// //     await newPackages.save(); // save to database
// //   } catch (err) {
// //     console.log(err);
// //     throw new Error("failed to add this package!");
// //   }

// //   revalidatePath("/dashboard/package");
// //   redirect("/dashboard/package");
// // };

// // export const updateUser = async (formData) => {
// //   const { id, username, email, password, phone, address, isAdmin, IsActive } =
// //     Object.fromEntries(formData);
// //   try {
// //     connectToDB();

// //     const updateFields = {
// //       username,
// //       email,
// //       password,
// //       phone,
// //       address,
// //       isAdmin,
// //       IsActive,
// //     };

// //     Object.keys(updateFields).forEach(
// //       (key) => updateFields[key] === undefined && delete updateFields[key]
// //     );

// //     await User.findByIdAndUpdate(id, updateFields); // update user details in database
// //   } catch (err) {
// //     console.log(err);
// //     throw new Error("failed to update user!");
// //   }

// //   revalidatePath("/dashboard/users");
// //   redirect("/dashboard/users");
// // };

// // export const deleteUser = async (formData) => {
// //   const { id } = Object.fromEntries(formData);
// //   try {
// //     connectToDB();
// //     await User.findByIdAndDelete(id); // delet user from database
// //   } catch (err) {
// //     console.log(err);
// //     throw new Error("failed to delete user!");
// //   }

// //   revalidatePath("/dashboard/users");
// // };

// // export const deletePackage = async (formData) => {
// //   const { id } = Object.fromEntries(formData);
// //   try {
// //     connectToDB();
// //     await Packages.findByIdAndDelete(id); // delet product from database
// //   } catch (err) {
// //     console.log(err);
// //     throw new Error("failed to delete package!");
// //   }

// //   revalidatePath("/dashboard/package");
// //   redirect("/dashboard/package");
// // };

// // export const updatePackage = async (formData) => {
// //   const { id, packageName, desc, amount, roi, period, isActive, createdAt } =
// //     Object.fromEntries(formData);
// //   try {
// //     connectToDB();

// //     const updateFields = {
// //       packageName,
// //       desc,
// //       amount,
// //       roi,
// //       period,
// //       isActive,
// //       createdAt,
// //     };

// //     Object.keys(updateFields).forEach(
// //       (key) => updateFields[key] === undefined && delete updateFields[key]
// //     );

// //     await Packages.findByIdAndUpdate(id, updateFields); // update user details in database
// //   } catch (err) {
// //     console.log(err);
// //     throw new Error("failed to update package!");
// //   }

// //   revalidatePath("/dashboard/package");
// //   redirect("/dashboard/package");
// // };

// // export const signOut = async () => {
// //   try {
// //     const apiUrl = `${process.env.APIURL}/logout`;

// //     const Data = await fetch(apiUrl, {
// //       method: "DELETE",
// //     });
// //     const data = await Data.json();

// //     return data;
// //   } catch (err) {
// //     console.error("Logout error:", err);
// //     throw new Error("Logout error");
// //   }
// // };

// // export const addDeposit = async (formData) => {
// //   const { userId, amount, packageId, roi, period } =
// //     Object.fromEntries(formData);
// //   try {
// //     connectToDB();

// //     const newDeposit = new Deposit({
// //       userId,
// //       amount,
// //       packageId,
// //       roi,
// //       period,
// //     });
// //     await newDeposit.save(); // save to database
// //   } catch (err) {
// //     console.log(err);
// //     throw new Error("failed to add this deposit!");
// //   }

// //   revalidatePath("/dashboard/deposit");
// //   redirect("/dashboard/deposit");
// // }

// // export const updateDeposit = async (formData) => {
// //   const { id, userId, amount, packageId, roi, period, isActive, createdAt } =
// //     Object.fromEntries(formData);
// //   try {
// //     connectToDB();

// //     const updateFields = {
// //       userId,
// //       amount,
// //       packageId,
// //       roi,
// //       period,
// //       isActive,
// //       createdAt
// //     };

// //     Object.keys(updateFields).forEach(
// //       (key) => updateFields[key] === undefined && delete updateFields[key]
// //     );

// //     await Deposit.findByIdAndUpdate(id, updateFields); // update user details in database
// //   } catch (err) {
// //     console.log(err);
// //     throw new Error("failed to update deposit!");
// //   }

// //   revalidatePath("/dashboard/deposit");
// //   redirect("/dashboard/deposit");
// // };

// // export const deleteDeposit = async (formData) => {
// //   const { id } = Object.fromEntries(formData);
// //   try {
// //     connectToDB();
// //     await Deposit.findByIdAndDelete(id); // delet product from database
// //   } catch (err) {
// //     console.log(err);
// //     throw new Error("failed to delete deposit!");
// //   }

// //   revalidatePath("/dashboard/deposit");
// //   redirect("/dashboard/deposit");
// // };

// // export const addWithdrawal = async (formData) => {
// //   const { userId, amount, packageId, roi, period } =
// //     Object.fromEntries(formData);
// //   try {
// //     connectToDB();

// //     const newWithdrawal = new Withdrawal({
// //       userId,
// //       amount,
// //       packageId,
// //       roi,
// //       period,
// //     });
// //     await newWithdrawal.save(); // save to database
// //   } catch (err) {
// //     console.log(err);
// //     throw new Error("failed to add this withdrawal!");
// //   }

// //   revalidatePath("/dashboard/withdrawal");
// //   redirect("/dashboard/withdrawal");
// // }

// // export const updateWithdrawal = async (formData) => {
// //   const { id, userId, amount, packageId, roi, period, isActive, createdAt } =
// //     Object.fromEntries(formData);
// //   try {
// //     connectToDB();

// //     const updateFields = {
// //       userId,
// //       amount,
// //       packageId,
// //       roi,
// //       period,
// //       isActive,
// //       createdAt
// //     };

// //     Object.keys(updateFields).forEach(
// //       (key) => updateFields[key] === undefined && delete updateFields[key]
// //     );

// //     await Withdrawal.findByIdAndUpdate(id, updateFields); // update user details in database
// //   } catch (err) {
// //     console.log(err);
// //     throw new Error("failed to update withdrawal!");
// //   }

// //   revalidatePath("/dashboard/withdrawal");
// //   redirect("/dashboard/withdrawal");
// // };

// // export const deleteWithdrawal = async (formData) => {
// //   const { id } = Object.fromEntries(formData);
// //   try {
// //     connectToDB();
// //     await Withdrawal.findByIdAndDelete(id); // delet product from database
// //   } catch (err) {
// //     console.log(err);
// //     throw new Error("failed to delete withdrawal!");
// //   }

// //   revalidatePath("/dashboard/withdrawal");
// //   redirect("/dashboard/withdrawal");
// // };

// // export const addReferral = async (formData) => {
// //   const { userId, amount, packageId, roi, period } =
// //     Object.fromEntries(formData);
// //   try {
// //     connectToDB();

// //     const newReferral = new Referral({
// //       userId,
// //       amount,
// //       packageId,
// //       roi,
// //       period,
// //     });
// //     await newReferral.save(); // save to database
// //   } catch (err) {
// //     console.log(err);
// //     throw new Error("failed to add this referral!");
// //   }

// //   revalidatePath("/dashboard/referral");
// //   redirect("/dashboard/referral");
// // };

// // export const updateReferral = async (formData) => {
// //   const { id, userId, amount, packageId, roi, period, isActive, createdAt } =
// //     Object.fromEntries(formData);
// //   try {
// //     connectToDB();

// //     const updateFields = {
// //       userId,
// //       amount,
// //       packageId,
// //       roi,
// //       period,
// //       isActive,
// //       createdAt
// //     };

// //     Object.keys(updateFields).forEach(
// //       (key) => updateFields[key] === undefined && delete updateFields[key]
// //     );

// //     await Referral.findByIdAndUpdate(id, updateFields); // update user details in database
// //   } catch (err) {
// //     console.log(err);
// //     throw new Error("failed to update referral!");
// //   }

// //   revalidatePath("/dashboard/referral");
// //   redirect("/dashboard/referral");
// // };

// // export const deleteReferral = async (formData) => {
// //   const { id } = Object.fromEntries(formData);
// //   try {
// //     connectToDB();
// //     await Referral.findByIdAndDelete(id); // delet product from database
// //   } catch (err) {
// //     console.log(err);
// //     throw new Error("failed to delete referral!");
// //   }

// //   revalidatePath("/dashboard/referral");
// //   redirect("/dashboard/referral");
// // };




// // export const handleAdd = async (e) => {
// //     e.preventDefault(); 
// //     const apiUrl = `${process.env.APIURL}/signup`;
// //     const fields = Array.from(e.CurrentTarget.elements)
// //     const user = fields.filter(({type}) => type !== 'submit').reduce((prev, curr) => {
// //         prev[curr.name] = curr.value;
// //         return prev;
// //     }, {});

// //     const result = await fetch(apiUrl, {
// //         method: 'POST',
// //         body: JSON.stringify(user),
// //     }).then(res => res.json());

// //     if (result?.data?.id) {
// //       window.location.href = '/usersdashboard';
// //     }

// // }

// // export const handleDelete = async (e) => {
// //     e.preventDefault(); 
// //     const apiUrl = `${process.env.APIURL}/delete`;
// //     const fields = Array.from(e.CurrentTarget.elements)
// //     const user = fields.filter(({type}) => type !== 'submit').reduce((prev, curr) => {
// //         prev[curr.name] = curr.value;
// //         return prev;
// //     }, {});

// //     const result = await fetch(apiUrl, {
// //         method: 'DELETE',
// //         body: JSON.stringify({
// //             id: router.query.id
// //         })
// //     }).then(res => res.json());

// //     if (result?.result?.deleted_hashes?.includes(router.query.id) ) {
// //       window.location.href = '/usersdashboard';;
// //     }

// // }


// // export const handleUpdate = async (e) => {
// //     e.preventDefault(); 
// //     const apiUrl = `${process.env.APIURL}/update`;
// //     const fields = Array.from(e.CurrentTarget.elements)
// //     const user = fields.filter(({type}) => type !== 'submit').reduce((prev, curr) => {
// //         prev[curr.name] = curr.value;
// //         return prev;
// //     }, {});

// //     const result = await fetch(apiUrl, {
// //         method: 'POST',
// //         body: JSON.stringify({
// //             ...user,
// //             id: router.query.id
// //         }),
// //     }).then(res => res.json());

// //     if (result?.result?.update_hashes?.includes(router.query.id)) {
// //       window.location.href = '/usersdashboard';
// //     }

// // }