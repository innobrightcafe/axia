'use client';
import { lusitana } from './fonts';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './button';
import axios from 'axios'; 
import { useCookies } from

 
export default function Register() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signupEndpoint = process.env.NEXT_PUBLIC_API_SIGNUP_ENDPOINT;

  const handleRegister = async () => {
  console.log('handleSignup function is called');
  try {
    setLoading(true);

    // Check if passwords match
    if (password !== confirmPassword) {
      throw { type: 'passwordMismatch', message: "Your passwords don't match" };
    }

    // Signup request without authorization header
    const response = await axios.post(signupEndpoint, {
      name,
      username,
      email,
      password,
    });

    console.log('Signup successful', response.data);

    // Extract user ID from the response
    const userId = response.data.id;
    const userToken = response.data.token;

    // Set user ID in the cookies
    Cookies.set('userId', userId, { expires: 7 });
    Cookies.set('userToken', userToken, { expires: 7 });

    // Set success message
    setSuccess(true);

    // Redirect to login page
    router.push('/login');
  } catch (error) {
    console.error('Sorry, Signup failed', error);

    if (error === 'emailExists') {
      setError('This email address already exists');
    } else {
      setError('Signup failed. Please try again later.');
    }

    // Clear success state
    setSuccess(false);
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="h-screen md:flex">
      <div className="flex items-center justify-center bg-white py-10 md:w-1/2">
        <form onSubmit={handleRegister} className="bg-white">
          <h1
            className={`${lusitana.className} mb-1 text-2xl font-bold text-gray-800`}
          >
            Hello!
          </h1>
          <p className="text-md mb-7 font-normal text-gray-600">
            Dont have an account? Please register to continue.
          </p>
          <div className="mb-4 flex items-center rounded-2xl border-2 px-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#FF4300]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="border-none pl-2 outline-none"
              type="text"
              name=""
              id=""
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center rounded-2xl border-2 px-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#FF4300]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
            <input
              className="border-none pl-2 outline-none"
              type="text"
              name=""
              id=""
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center rounded-2xl border-2 px-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#FF4300]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="border-none pl-2 outline-none"
              type="text"
              name=""
              id=""
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center rounded-2xl border-2 px-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#FF4300]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="border-none pl-2 outline-none"
              type="text"
              name=""
              id=""
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center rounded-2xl border-2 px-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#FF4300]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="border-none pl-2 outline-none"
              type="text"
              name=""
              id=""
              placeholder="ConfirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            disabled={loading} //when loading
            className="mt-4 flex items-center justify-center gap-5 self-start rounded-lg bg-[#FF4300] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#343A40] md:text-base"
          >
            {loading ? 'Loading...' : 'Register'}
            <ArrowRightIcon className="w-5 md:w-6" />
          </Button>
          <span className="ml-2 cursor-pointer text-sm hover:text-[#FF4300]">
            Forgot Password ?
          </span>
        </form>
      </div>
    </div>
  );
}
