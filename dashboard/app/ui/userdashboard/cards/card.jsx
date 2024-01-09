import React from 'react';

const Card = () => {
  return (
    <div className="balance-report__wrapper dashboard-single__box bg-white shadow-md p-6 rounded-md">
      <div className="balance-report">
        <div>
          <h4 className="text-2xl font-bold">€537,00</h4>
          <p className="text-gray-500">Monthly Income</p>
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
          <p className="text-gray-500">Amount Invested</p>
          <h6 className="flex items-center text-2xl font-bold">
            <img
              alt="Invested"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finvested.959fb382.png&w=64&q=75"
              width="30"
              height="30"
              decoding="async"
              loading="lazy"
              style={{ marginRight: '0.5rem' }}
            />
            €108.934,00
          </h6>
        </div>
        <div className="group-inner">
          <p className="text-gray-500">Total Earnings</p>
          <h6 className="flex items-center text-2xl font-bold">
            <img
              alt="Earned"
              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fearned.8368c7a9.png&w=64&q=75"
              width="30"
              height="30"
              decoding="async"
              loading="lazy"
              style={{ color: 'transparent', marginRight: '0.5rem' }}
            />
            €12.606,00
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
