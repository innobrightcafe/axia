'use client';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './chart.module.css'

const data = [
  { day: "Mon", returns: 200, balance: 1200 },
  { day: "Tue", returns: 200, balance: 1400 },
  { day: "Wed", returns: 200, balance: 1600 },
  { day: "Thu", returns: 200, balance: 1800 },
  { day: "Fri", returns: 200, balance: 2000 },
  { day: "Mon", returns: 200, balance: 1200 },
  { day: "Tue", returns: 200, balance: 1400 },
  { day: "Wed", returns: 200, balance: 1600 },
  { day: "Thu", returns: 200, balance: 1800 },
  { day: "Fri", returns: 200, balance: 2000 },
  { day: "Mon", returns: 200, balance: 1200 },
  { day: "Tue", returns: 200, balance: 1400 },
  { day: "Wed", returns: 200, balance: 1600 },
  { day: "Thu", returns: 200, balance: 1800 },
  { day: "Fri", returns: 200, balance: 2000 },
];
const Chart = (props) => {
  return (
    <div className={styles.container}>
      <h3>Weekly Overview</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
           
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip contentStyle={{background:"var(--btn)", border:"none"}}/>
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey={props.returns} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey={props.balance} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart