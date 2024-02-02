 import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart"; 
import Card from "../ui/dashboard/card/card";
import { FaHandHoldingDollar, FaMoneyBillTransfer, FaSackDollar } from "react-icons/fa6";
import ProtectedRoute from "../ProtectedRoute";


const page = async () => {  
  return (
    <ProtectedRoute>
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card icon={<FaSackDollar size={24} />} tittle="Total Deposit" amount={120000} details="100 new deposits"/> 
          <Card icon={<FaMoneyBillTransfer size={24} />} tittle="Total Withdraw" amount={192000} details="1200 resent withdraw" />
          <Card icon={<FaHandHoldingDollar size={24} />} tittle="Total Referer" amount={120} details="1000 new users"/>  
        </div>
        <Transactions name="john doe" amount={`$${4000}`} date={`${23}/${2}/${2023}`} status="active" />
        <Chart returns="returns" balance="balance"/>
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
    </ProtectedRoute>
  );
};

export default  page;
