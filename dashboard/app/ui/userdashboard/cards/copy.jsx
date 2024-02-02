"use client";
import styles from "../../dashboard/transactions/transactions.module.css";
import { useState } from "react";
import { FaCopy } from "react-icons/fa6";
const Copy = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const inputElement = document.getElementById("cronjobURL");
    inputElement.select();
    document.execCommand("copy");
    setIsCopied(true);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Referal Link</h2>
      <div className="input-group input--group p-3">
        <input
          type="text"
          className="form-control form--control"
          readOnly
          value="https://https://bastonprojectmanagement.com/?reff=3266dcfa238c067719a09f1eabc4e1b4"
          id="cronjobURL"
        />
        <button
          className={`input-group-text px-3 btn--primary border-0 ${
            isCopied ? "bg-green-500" : "bg-blue-500"
          }`}
          type="button"
          id="copyBoard"
          onClick={handleCopy}
        >
          {isCopied ? "Copied" : <FaCopy className="text-[ff4300]" size={25} />}
        </button>
      </div>
    </div>
  );
};

export default Copy;