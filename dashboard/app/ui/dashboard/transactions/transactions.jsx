import Image from "next/image";
import styles from "./transactions.module.css";
const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
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
              John Doe
              </div>
            </td>
            <td>$200</td>
            <td>1/12/2023</td>
            <td>
              <span className={`${styles.status} ${styles.active}`}>
                Active
              </span>
            </td>
          </tr>
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
              John Doe
              </div>
            </td>
            <td>$200</td>
            <td>1/12/2023</td>
            <td>
              <span className={`${styles.status} ${styles.inactive}`}>
                Inactive
              </span>
            </td>
          </tr>
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
              John Doe
              </div>
            </td>
            <td>$200</td>
            <td>1/12/2023</td>
            <td>
              <span className={`${styles.status} ${styles.active}`}>
                Active
              </span>
            </td>
          </tr>
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
              John Doe
              </div>
            </td>
            <td>$200</td>
            <td>1/12/2023</td>
            <td>
              <span className={`${styles.status} ${styles.inactive}`}>
                Inactive
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
