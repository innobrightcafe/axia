import Image from "next/image";
import styles from "./transactions.module.css";
const InvestmentHistory = (ashan) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{ashan.tittle}</h2>
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
            <td>{ashan.name}</td>
            <td>{ashan.id}</td>
            <td>{ashan.amount}</td>
            <td>{ashan.date}</td>
            <td>
              <span>
                {ashan.isComplete ? (
                  <span className={`${styles.status} ${styles.completed}`}>
                    Complete
                  </span>
                ) : ashan.isProcessing ? (
                  <span className={`${styles.status} ${styles.processing}`}>
                    Processing
                  </span>
                ) : <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentHistory;
