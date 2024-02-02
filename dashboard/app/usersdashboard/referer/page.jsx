import Copy from "../../ui/userdashboard/cards/copy";
import styles from "../../ui/userdashboard/referer/referer.module.css";

const RefererProgram = () => {
  return (
    <div className={styles.container}>
      <h1>Referer Program</h1>
      <div>
        <Copy />
      </div>
      <div className={styles.box}>
        <h3 className={styles.ref}>Your Referral Earnings</h3>
        <p className={styles.p}>Total Referrals: 0</p>
        <p className={styles.p}>Total Referral Bonus: $0.00</p>
      </div>
    </div>
  );
};

export default RefererProgram;
