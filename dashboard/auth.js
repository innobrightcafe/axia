// auth.js
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import axios from 'axios';
import Cookies from 'js-cookie'; 
import { z } from 'zod';

export const getUser = async () => {
  try {
    const apiUrl = `${process.env.APIURL}/myData`;
    const token = Cookies.get('token');
    const authToken = `JWT ${token}`;
    const res = await axios(apiUrl, {
      headers: {
        Authorization: authToken,
      },
      cache: 'no-store',
    });

    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error(`Failed to fetch data from API: ${res.statusText}`);
    }
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
};

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(6) })
            .safeParse(credentials);

          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email);
            if (!user) {
              throw new Error('User not found or authentication failed.');
            }
            return user;
          } else {
            throw new Error('Invalid credentials format.');
          }
        } catch (error) {
          console.error('Authentication error:', error.message);
          throw new Error('Failed to authenticate user.');
        }
      },
    }),
  ],
});
