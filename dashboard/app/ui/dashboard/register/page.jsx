'use client';
 import { useState} from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../dashboard/register/register.module.css';
import { addUser } from '../../../lib/actions'; 
import Link from 'next/link';

export const Register = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token, success } = await addUser({
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        confirmPassword: e.target.confirmPassword.value,
      });
      setError('');
    setSuccess(success);
    if (success) {
      document.cookie = `token=${token}; path=/`;
      router.push('/dashboard');
    } 
  } catch (error) {
    setError(error.message);
    setSuccess('');
  }
  };

  return ( 
    <div className={styles.container}>
      <div className={styles.formContainer}> 
        <h1 className={styles.header}> Hello!</h1>
        <p className="text-md mb-7  text-gray-600">
          Dont have an account? Please register to continue.
        </p>

        <form   onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputdiv}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#FF4300]"
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
              type="text"
              name="username"
              id="username"
              placeholder="Enter username"
            />
          </div>

          <div className={styles.inputdiv}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#FF4300]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input type="text" name="email" id="" placeholder="Email Address" />
          </div>

          <div className={styles.inputdiv}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#FF4300]"
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
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </div>

          <div className={styles.inputdiv}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#FF4300]"
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
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
              
          </div>
          

           

          {/* <div className="mb-5 inline-flex items-start">
            <input
              type="checkbox"
              id="checkbox"
              className="mr-1 mt-1 text-[#FF4300]"
            />
            <p htmlFor="checkbox" className="text-sm text-gray-600">
              I agree to the <Link href="#">Terms of Service</Link> and 
              <Link href="#">Privacy Policy.</Link>
            </p>
          </div> */}

          <div>
            {/* Button */}
            {error && <div className="text-red-500 p-4 m-4 rounded-lg bg-red-200">{error}</div>}
            {success && <div className="text-green-500 p-4 m-4 rounded-lg bg-green-200">{success}</div>}
            <div className="d-grid">
              <button
                type="submit"
                className="w-full p-4 bg-[#FF4300] text-white rounded-sm hover:bg-orange-600"
              >
                Create Free Account
              </button>
            </div>
           
            <div className="flex justify-between mt-4">
              <div className="mb-2">
                <Link
                  href="/login"
                  className="text-lg text-[#FF4300]"
                >
                  Already a member? Login
                </Link>
              </div>
              <div>
                <Link
                  href="/forgetPassword"
                  className="text-lg text-[#FF4300]"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
