import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getToken } from './lib/actions'; // Implement a function to retrieve the token

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = getToken(); // Retrieve the token from localStorage or cookies

    if (!token) {
      router.push('/login');
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
