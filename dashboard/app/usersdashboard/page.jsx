import React, { Suspense } from "react";
import styles from "../ui/userdashboard/userdashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/userdashboard/History/history";
import Chart from "../ui/dashboard/chart/chart";
import StatCard from "../ui/userdashboard/cards/statCard";
import Copy from "../ui/userdashboard/cards/copy";
import Card from "../ui/userdashboard/cards/card";
import LoadingSpinner from "../ui/userdashboard/loading/LoadingSpinner";
// import { fetchUsers } from '../lib/actions'
// import { protectRoute } from "../lib/authMiddleware";

const page = async () => { 
  // const roibalance = await fetchUsers();
  // console.log(roibalance);

  return (
    <div className={styles.wrapper}>
       <Suspense fallback={<LoadingSpinner />}/>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card balance={20000} capital={30000} ROI={3400} />
          <StatCard />
        </div>
        <Copy />
        <Transactions name="Gold" amount={`$${4000}`} date={`${23}/${2}/${2023}`} status="Complete" />
        <Chart returns="returns" balance="balance"/>
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default   page;
