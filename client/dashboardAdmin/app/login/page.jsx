import styles from "../ui/login/login.module.css";
import { FaRegUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.header}>
          Please provide details and click continue.
        </h1>
        <form action="" className={styles.form}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
          />
          <FaRegUser className={styles.userIcon} />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
          />
          <MdLockOutline className={styles.pwIcon} />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
