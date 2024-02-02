// auth.config.js
import { NextAuthConfig } from 'next-auth';

const authConfig = {
  // Add your NextAuth configuration options here
  // For example:
  secrete: `${process.env.AUTH_SECRET}`,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async redirect(url, baseUrl) {
      return baseUrl + '/dashboard';
    },
    async session(session, user) {
      session.user = user;
      return session;
    },
  },
  providers: [], // Add authentication providers here
};

export default authConfig;
