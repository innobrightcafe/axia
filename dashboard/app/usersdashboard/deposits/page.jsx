import Link from 'next/link'; 
import styles from "../../ui/userdashboard/adduser/adduser.module.css";
const Deposit = (props) => {
  return (
    <div className={styles.container}>
      <form action='' required className={styles.form}>
        <select name="isActive" id="is Active">
          <option value={false}>Payment Method</option>
          <option value={true}>Bank Transfer</option>
          <option value={false}>Bank Card</option>
          <option value={false}>BTC</option>
          <option value={false}>USDT</option>
          
        </select>
        <input
          type="number"
          placeholder="Deposit Amount"
          name="amount"
          required
        />

        <textarea
          name="address"
          id="address"
          rows="4"
          placeholder="User Detals"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
);
}; 

export default Deposit