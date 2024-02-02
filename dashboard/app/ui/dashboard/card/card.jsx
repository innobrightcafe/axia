import React from "react"; 
 import styles from "./card.module.css" 
import {  FaSackDollar } from "react-icons/fa6";

const Card = (props) => {
  return (
    <div className={styles.container}>
      {props.icon} 
        <div className={styles.texts}>
          <span className={styles.title}>{props.tittle}</span>
          <span className={styles.number}>{props.amount}</span>
          <span className={styles.details}>
            <span className={styles.positive}>{props.details}</span></span>
        </div> 
    </div>
  );
};

export default Card;
