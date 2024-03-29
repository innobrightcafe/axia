import React from "react";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BsPlusSquareDotted } from "react-icons/bs"; 
import Link from "next/link"; 
 


const Card = (props) => {  
  return (
    <> 
        <div 
          className="flex gap-3 flex-row-1 sm:flex-row-2 lg:flex-row-3"
        >
          <div className="balance-report__wrapper rounded-4 dashboard-single__box bg-[#ff4300] shadow-md  p-6 rounded-md">
            <div className="balance-report flex">
              <div>
                <h4 className="text-5xl font-bold flex">
                  <span>
                    <FaMoneyCheckDollar className="m-1" />
                  </span>
                   ${props.balance}
                </h4>
                <p className="text-gray-100">Monthly Income</p>
              </div>
              <div className="dashboard-balance-report select">
                <select className="select-balance-report ms-sm-4">
                  <option value="last">Last Month</option>
                  <option value="january">January</option>
                  <option value="february">February</option>
                  <option value="march">March</option>
                  <option value="april">April</option>
                  <option value="may">May</option>
                  <option value="june">June</option>
                  <option value="july">July</option>
                  <option value="august">August</option>
                  <option value="september">September</option>
                  <option value="october">October</option>
                  <option value="november">November</option>
                  <option value="december">December</option>
                </select>
              </div>
            </div>
            <hr className="my-4" />
            <div className="grid grid-cols-2 gap-4">
              <div className="group-inner">
                <p className="text-gray-100">Amount Invested</p>
                <h6 className="flex items-center text-2xl font-bold">
                  <FaMoneyCheckDollar className="m-1" />${props.capital}
                </h6>
              </div>
              <div className="group-inner">
                <p className="text-gray-100">Total Earnings</p>
                <h6 className="flex items-center text-2xl font-bold">
                  <FaMoneyCheckDollar className="m-1" />${props.ROI}
                </h6>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F4F2] flex p-10 box-shadow rounded-4 pl-30 pr-10">
            <div className="text-center">
              <h4 className="pb-2 px-2 font-bold ">Withdrawal | Invest</h4>
              <Link href="/usersdashboard/package">
              <BsPlusSquareDotted className="mx-5 size-20" />
              </Link>
            </div>

            <div className="balance-report__wrapper rounded-4 dashboard-single__box bg-white shadow-md  p-6 rounded-md">
              <div className="balance-report flex">
                <div>
                  <p className="text-gray-600">Earn up to</p>
                  <h4 className="text-5xl font-bold flex">
                    
                      <span>
                        <FaMoneyCheckDollar className="m-1 transition-all" />
                      </span> 
                    $5000,00
                  </h4>
                  <p className="text-gray-600">Monthly Income</p>
                </div>
              </div>
              <hr className="my-4" />
              <div className="grid grid-cols-2 gap-4">
                <div className="group-inner">
                  <p className="text-gray-600">Amount Invested</p>
                  <h6 className="flex items-center text-2xl font-bold">
                    <FaMoneyCheckDollar className="m-1" />${props.capital}
                  </h6>
                </div>
                <div className="group-inner">
                  <p className="text-gray-600">Total Earnings</p>
                  <h6 className="flex items-center text-2xl font-bold">
                    <FaMoneyCheckDollar className="m-1" />${props.ROI}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div> 
    </>
  );
};

export default Card;
