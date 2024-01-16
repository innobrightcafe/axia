import React from "react";
import styles from "../../ui/userdashboard/adduser/adduser.module.css";
const Transfer = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input
          type="email"
          placeholder="Reciever email"
          name="email"
          required
        />
        <input type="number" placeholder="Amount" name="anount" required />
        <select name="isActive" id="is Active">
          <option value={false}>Select wallet</option>
          <option value={true}>Main Balance</option>
          <option value={false}>ROI Balance</option>
        </select>
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />

        <textarea
          name="address"
          id="address"
          rows="4"
          placeholder="User Adress"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Transfer;
