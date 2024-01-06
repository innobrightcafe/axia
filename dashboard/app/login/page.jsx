import styles from "../ui/login/login.module.css"; 
import { authenticateUser } from "../lib/actions";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
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
        <form action={authenticateUser} className={styles.form}>
          <div className={styles.radio}>
            <input
              type="radio"
              id="user"
              className={styles.radioInput}
              name="role"
              value="user"
              defaultChecked
            />
            <label
              htmlFor="user"
              className={`${styles.option} ${styles.option1}`}
            >
              <div className={styles.dot}></div>
              <span>User</span>
            </label>
            <input
              type="radio"
              id="admin"
              className={styles.radioInput}
              name="role"
              value="admin"
            />
            <label
              htmlFor="admin"
              className={`${styles.option} ${styles.option2}`}
            >
              <div className={styles.dot}></div>
              <span>Admin</span>
            </label>
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
          <button type="submit">Login</button>
          <span className="m-3  cursor-pointer text-ms hover:text-[#FF4300]">
               <Link href='/'>
               No account? Register
               </Link> 
              </span>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
