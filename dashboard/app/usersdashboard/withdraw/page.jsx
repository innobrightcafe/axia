import React from "react";
import styles from "../../ui/userdashboard/withdraw/withdraw.module.css";
import { addUser } from "../../lib/actions";

const Withdraw = () => {
  return (
    <div className={styles.container}>
      <h1 className="p-3">Withdraw</h1>
      <p className="p-3">Withdraw your money from your wallet</p>
      <hr />
      <div className={styles.withdrawBalance}>
        <div className={styles.withdrawbox}>
          <h3 className="font-bold">Your Balance</h3>
          <p className="p-3">Main Balance: $0.00</p>
          <p className="p-3">ROI Balance: $0.00</p>
        </div>
        <div className={styles.withdrawbox}>
          <h3 className="font-bold ">Withdraw Charges</h3> 
          <p className="p-3">Total Fixed Charge: $0.00</p>
          <p className="p-3">Percentage Charge: $0.00</p>
        </div>
        <div className={styles.withdrawbox}>
          <h3 className="font-bold ">Withdraw conditions</h3>
          <p className="p-3">Withdrawable Amount: $0.00</p>
          <p className="p-3">Process period: up to 48hrs</p> 
        </div>
      </div>
      <form action={addUser} className={styles.form}>
        <input
          type="text"
          placeholder="Enter Amount"
          name="amuont"
          required
        />
         
        <select name="wallet" id="wallet">
          <option value={false}>Select wallet</option>
          <option value={true}>Main Balance</option>
          <option value={false}>ROI Balance</option>
        </select>
        <select name="gateway" id="gateway">
          <option value={false}>Select Option</option>
          <option value={true}>Bank</option>
          <option value={false}>Paypal</option>
          <option value={false}>USDT</option>
        </select>   
        <textarea name="accountInfo" id="accountInfo" rows="3" placeholder="Enter Account Information"  ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Withdraw;
