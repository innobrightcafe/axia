// import CredentialsProvider from "next-auth/providers/credentials";
// import NextAuth from "next-auth";
// import { connectToDB } from "../app/lib/utils";
// import bcrypt from "bcrypt";
// import { authConfig } from "../authconfig";
// import { User } from "./lib/models";

// const login = async (credentials) => {
//   console.log('Credentials:', credentials);

//   try {
//     connectToDB();
//     const user = await User.findOne({ username:credentials.username });
//     console.log('User:', user);
//     if(!user) throw new Error("wrong username or password");

//     const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
//     if (!isPasswordCorrect) throw new Error("wrong username or password");
//     return user; 

//   } catch (err) {
//     console.log(err);
//     throw new Error("failed to login");
//   }
// };

// export const { signIn, signOut, auth } = NextAuth({
//   ...authConfig,
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. 'Sign in with...')

//       async authorize(credentials) {
//         try {
//           const user = await login(credentials);
//           return user;
//         } catch (err) { 
//           return null;
//         }
//       },
//     }),
//   ],
// });
