import Image from "next/image";
import styles from "./transactions.module.css";
const Transactions = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recently Joined Users</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Amount</td>
            <td>Date</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
            <div className={styles.user}>
              <Image
                src="/noavatar.png"
                alt="avater"
                width={40}
                height={40}
                className={styles.userImage}
              />
              {props.name}
              </div>
            </td>
            <td>{props.amount}</td>
            <td>{props.date}</td>
            <td>
              <span className={`${styles.status} ${styles.active}`}>
                {props.status}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
