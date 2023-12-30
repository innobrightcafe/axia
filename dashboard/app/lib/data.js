import { Packages, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUser = async (q, page) => {
  const regex = new RegExp(q, "i");

  const PER_PAGE = 4;
  try {
    connectToDB();
    const total_page = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(PER_PAGE)
      .skip(PER_PAGE * (page - 1));
    return { users, total_page };
  } catch (err) {
    console.log(err);
    throw new Error("failed to fetch users!");
  }
};

export const fetchUserId = async (id) => {  

  try {
    connectToDB(); 
    const user = await User.findById(id);
    return user; 
  } catch (err) {
    console.log(err);
    throw new Error("failed to fetch user by id!");
  }
};


export const fetchPackage = async (q, page) => {
  const regex = new RegExp(q, "i");

  const PER_PAGE = 3;
  try {
    connectToDB();
    const total_page = await Packages.find({ packageName: { $regex: regex } }).count();
    const packages = await Packages.find({ packageName: { $regex: regex } })
      .limit(PER_PAGE)
      .skip(PER_PAGE * (page - 1));
    return { packages, total_page };
  } catch (err) {
    console.log(err);
    throw new Error("failed to fetch Packages!");
  }
};

 

export const fetchPackageId = async (id) => {  

  try {
    connectToDB(); 
    const packaged = await Packages.findById(id);
    return packaged; 
  } catch (err) {
    console.log(err);
    throw new Error("failed to fetch package by id!");
  }
};
