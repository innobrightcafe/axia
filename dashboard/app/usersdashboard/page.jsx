import React from 'react'
 
import styles from '../ui/dashboard/dashboard.module.css'
import Rightbar from '../ui/dashboard/rightbar/rightbar'
import Transactions from '../ui/dashboard/transactions/transactions'
import Chart from '../ui/dashboard/chart/chart'
import StatCard from '../ui/userdashboard/cards/statCard'
import Copy from '../ui/userdashboard/cards/copy'
import Card from '../ui/userdashboard/cards/[email]/card'
import { fetchROItoBal } from '../lib/actions'
   

const page = async ({ params }) => {
  const { email } = params;
  const roibalance = await fetchROItoBal(email);
  console.log(roibalance);
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>     
    <div className={styles.cards}>
   
      <Card roibalance={roibalance}/> 
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