 
import styles from "./investment.module.css";
const  History = (props) => {
  return (
    <div className={styles.container}>
      <h2>{props.tittle}</h2>
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
            <td>{props.name}</td>
            <td>{props.amount}</td>
            <td>{props.date}</td>
            <td>
              <span>
                {props.active ? (
                  <span className={`${styles.status} ${styles.active}`}>
                    Active
                  </span>
                ) : (
                  <span className={`${styles.status} ${styles.inactive}`}>
                    Inactive
                  </span>
                )}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default History;
