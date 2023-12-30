import React from 'react'
import Card from '../ui/dashboard/card/card'
import styles from '../ui/dashboard/dashboard.module.css'
import Rightbar from '../ui/dashboard/rightbar/rightbar'
import Transactions from '../ui/dashboard/transactions/transactions'
import Chart from '../ui/dashboard/chart/chart'

export const fetchDataFromAPI = async () => {
  try {
    // Fetch data from API endpoint
    const Data = await fetch("https://axia-3akb.onrender.com/api/all", {
      cache: "no-store",
    });
    const data = await Data.json();
    return data;
  }
  catch (error) {
    console.log(error);
  }
}

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>     
    <div className={styles.cards}>
      <Card/>
      <Card/>
      <Card/>
    </div>
    <Transactions />
    <Chart/>
    </div>
    <div className={styles.side}>
      <Rightbar/>
    </div>
    </div>
  )
}

export default page