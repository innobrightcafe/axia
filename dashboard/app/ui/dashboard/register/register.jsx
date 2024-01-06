import { addUser } from "../../../lib/actions";
import styles from "../../dashboard/register/register.module.css";

export default async function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.header}> Hello!</h1>
        <p className="text-md mb-7 font-normal text-gray-600">
          Dont have an account? Please register to continue.
        </p>

        <form action={addUser} className={styles.form}>
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
          <button className={styles.button} type="submit">
            Register
          </button>
          <span className="m-3  cursor-pointer text-ms hover:text-[#FF4300]">
            Forgot Password ?
          </span>
        </form>
      </div>
    </div>
  );
}
