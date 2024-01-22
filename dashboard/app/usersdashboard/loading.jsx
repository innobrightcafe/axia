import React from "react";
import { ImSpinner2 } from "react-icons/im";
import styles from "../ui/LoadingSpinner.module.css";
  

const LoadingSpinner = () => {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.spinnerContainer}>
        < ImSpinner2 className={styles.spinner } size={80}/>
      </div>
    </div>
  );
};

export default LoadingSpinner;