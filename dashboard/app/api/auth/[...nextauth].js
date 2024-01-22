 import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      // The name to display on the sign-in form (e.g., 'Sign in with...')
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password",  type: "password" },
      },
      async authorize(credentials, req) {
        // Add custom logic to check the credentials against your database
        const user = { id: 1, name: 'Example User' };

        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      }
    }),
    // Add other providers as needed
  ],
  // Add custom configurations if required
});
