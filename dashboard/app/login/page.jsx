"use client";
import styles from "../ui/login/login.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaExclamationCircle } from "react-icons/fa";
import { useState } from "react"; 
import { authenticateUser } from "../lib/actions";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);

    try {
      const formData = new FormData(e.target);
      const result = await authenticateUser(formData);
      setSuccess(result.message);
      setError("");
    } catch (err) {
      setError(err.message);
      setSuccess("");
    }

    setPending(false);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setPending(true);

  //   const mail = e.target.email.value;
  //   const pass = e.target.password.value;
  //   console.log(mail, pass);

  //   try {
  //     // Get token from cookie
  //     const token = document.cookie.replace(
  //       /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
  //       "$1"
  //     );
  //     const apiUrl = `${process.env.APIURL}/login`;
  //     // Send token as a header to the login API
  //     const response = await fetch(apiUrl, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({
  //         mail,pass,
  //       }),
  //     });

  //     const data = await response.json();
  //     console.log(data);

  //     if (!response.ok) {
  //       throw new Error(data.message || "Login failed");
  //     }

  //     // Login successful, redirect to dashboard
  //     route.push("/dashboard");
  //   } catch (error) {
  //     setError(error.message);
  //   }

    
  

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
        <form onSubmit={handleSubmit} className={styles.form}>
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
           
          </div>
           {/* Display error/ success message */}
           {error && (
              <div className="text-red-500 p-4 rounded-lg bg-red-200">
                <FaExclamationCircle/>
                {error}
              </div>
            )}
            {success && (
              <div className="text-green-500 p-4 rounded-lg bg-green-200">
                {success}
              </div>
            )}
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
