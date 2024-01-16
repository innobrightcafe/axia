import Image from "next/image";
import styles from "./transactions.module.css";
const InvestmentHistory = () => {
  
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Investments</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>ID</td>
            <td>Amount</td>
            <td>Date</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Withdraw</td>
            <td>WERSD343</td>
            <td>$500</td>
            <td>1/12/2023</td>
            <td>
              {/* <span>
                  {user.isActive ? (
                    <span className={`${styles.status} ${styles.active} `}>
                      "Active"
                    </span>
                  ) : (
                    <span className={`${styles.status} ${styles.inactive} `}>
                      "Inactive"
                    </span>
                  )}
                </span>*/}
              Active
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentHistory;
