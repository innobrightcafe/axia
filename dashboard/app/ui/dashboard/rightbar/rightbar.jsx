import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";
const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="bg" fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Get 30% Bonus </span>
          <h3 className={styles.title}>enter the big promo.</h3>
          <span className={styles.subtitle}>Waste not your time</span>
          <p className={styles.desc}>
          Introduce just 2 persons to invest on their own and get 30% bonus on their investment.
          Use your referral link to invite your friends and family to invest on their own.
          and get 30% bonus on their investment.
          this is a limited time offer.
          start now and get your bonus.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
