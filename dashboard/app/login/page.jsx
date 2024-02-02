"use client";
import styles from "../ui/login/login.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaExclamationCircle } from "react-icons/fa";
import { useState } from "react";
import { addUser } from "../lib/actions";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [pending, setPending] = useState(false);
  const route = useRouter();
  const handleSubmit = async () => { 
    try {
      const token = await addUser(formData);
      // Store the token in session cookie
      document.cookie = `token=${token}; path=/`; // Set the token as a session cookie
      // Redirect user after successful login
      route.push("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      // Handle login errors
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.header}>
          Please provide details and click continue.
        </h1>
        <div className={styles.logobg}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/basron llogo.png"
                alt="Logo"
                width={150}
                height={45}
              />
            </Link>
          </div>
        </div>
        <form action={handleSubmit} className={styles.form}>
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
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
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
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </div>
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {/* Display error message */}
            {errorMessage && (
              <>
                <FaExclamationCircle className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
            {/* Display success message */}
            {successMessage && (
              <>
                <p className="text-sm text-green-500">{successMessage}</p>
              </>
            )}
          </div>
          <button
            aria-disabled={pending}
            type="submit"
            className="hover:animate-pulse"
            disabled={pending}
          >
            {pending ? "Logging in..." : "Login"}
          </button>
          <span className="m-3  cursor-pointer text-ms hover:text-[#fa652f] ">
            <Link href="/">No account? Register</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

//In the above code, we have a form with two
// input fields for email and password.
//When the user submits the form,
//the  handleSubmit  function is called.
//This function sends the form data to the
//addUser  function, which is imported from the
// lib/actions  file.
// Path: dashboard/app/lib/actions.js
