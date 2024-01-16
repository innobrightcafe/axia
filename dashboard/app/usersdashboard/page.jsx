import React from 'react'
import Card from '../ui/userdashboard/cards/card'
import styles from '../ui/dashboard/dashboard.module.css'
import Rightbar from '../ui/dashboard/rightbar/rightbar'
import Transactions from '../ui/dashboard/transactions/transactions'
import Chart from '../ui/dashboard/chart/chart'
import StatCard from '../ui/userdashboard/cards/statCard'
import Copy from '../ui/userdashboard/cards/copy'
   

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>     
    <div className={styles.cards}>
   
      <Card/> 
      <StatCard/> 
       
    </div>
    <Copy />
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