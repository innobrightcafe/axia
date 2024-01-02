import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { connectToDB } from "../app/lib/utils";
import User from "../app/lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });
    if (!user) throw new Error("wrong username or password");

    const isValid = await bcrypt.compare(credentials.password, user.password);
    if (!isValid) throw new Error("wrong username or password");
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("failed to login");
  }
};

export const { singIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')

      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
  ],
});
