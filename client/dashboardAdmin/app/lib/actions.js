"use server";
import { connectToDB } from "./utils";
import { Packages, User } from "./models";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

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
