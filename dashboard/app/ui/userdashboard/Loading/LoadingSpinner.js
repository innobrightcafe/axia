import React from "react";
import { FaSpinner } from "react-icons/fa";
import styles from "./LoadingSpinner.module.css"; // You can use a CSS module for styling

const LoadingSpinner = () => {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.spinnerContainer}>
        <FaSpinner className={styles.spinner} />
      </div>
    </div>
  );
};

export default LoadingSpinner;