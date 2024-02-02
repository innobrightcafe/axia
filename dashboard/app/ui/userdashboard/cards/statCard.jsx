import React from "react";
import styles from "../packages/packages.module.css";
import { FaCopy, FaMoneyCheckDollar } from "react-icons/fa6";
import Copy from "./copy";

const StatCard = () => {
  return (
    <>
    <div className={styles.container}>
      <div class=" w-full  top-34">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div class="bg-slate-50 p-5 m-2 rounded-md flex justify-between items-center shadow">
            <div>
              <h4 class="font-bold">Main Balance</h4>
              <p class="text-gray-500">100</p>
            </div>
            <FaMoneyCheckDollar className="p-2 size-20 bg-orange-200 rounded-md" />
          </div>

          <div class="bg-slate-50 p-5 m-2 flex justify-between items-center shadow">
            <div>
              <h4 class="font-bold">Interest Balance</h4>
              <p class="text-gray-500">65</p>
            </div>
            <FaMoneyCheckDollar className="p-2 size-20 bg-green-200 rounded-md" />
          </div>

          <div class="bg-slate-50 p-5 m-2 flex justify-between items-center shadow">
            <div>
              <h4 class="font-bold">Total Deposit</h4>
              <p class="text-gray-500">30</p>
            </div>
            <FaMoneyCheckDollar className="p-2 size-20 bg-yellow-200 rounded-md" />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div class="bg-slate-50 p-5 m-2 rounded-md flex justify-between items-center shadow">
            <div>
              <h4 class="font-bold">Refferal Bonus</h4>
              <p class="text-gray-500">100</p>
            </div>
            <FaMoneyCheckDollar className="p-2 size-20 bg-orange-200 rounded-md" />
          </div>

          <div class="bg-slate-50 p-5 m-2 flex justify-between items-center shadow">
            <div>
              <h4 class="font-bold">Total Transaction</h4>
              <p class="text-gray-500">65</p>
            </div>
            <FaMoneyCheckDollar className="p-2 size-20 bg-green-200 rounded-md" />
          </div>

          <div class="bg-slate-50 p-5 m-2 flex justify-between items-center shadow">
            <div>
              <h4 class="font-bold">Your Tickets</h4>
              <p class="text-gray-500">3</p>
            </div>
            <FaMoneyCheckDollar className="p-2 size-20 bg-yellow-200 rounded-md" />
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default StatCard;
