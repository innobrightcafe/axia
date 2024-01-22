import Link from "next/link";
import styles from "./navbar.module.css";
import { FaArrowDown } from "react-icons/fa6";

export const Dropdown = () => {
  return (
    <div>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>
         Menu
        </button>
        <div className={styles.dropdownContent}>
          <Link href="/">
            <h4>Transfer</h4>
          </Link>
          <Link href="/">
            <h4>withdraw</h4>
          </Link>
          <Link href="/">
            <h4>profile</h4>
          </Link>
          <Link href="/">
            <h4>Help</h4>
          </Link>
          <hr />
          <Link href="/">
            <h4>Logout</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};
