 import React, { Suspense } from "react";
import { fetchPackage } from "../../../lib/actions"; 
import Link from "next/link";
import LoadingSpinner from "../../../ui/userdashboard/Loading/LoadingSpinner";

const Investments = async ({ params: {id} }) => {
 
  const pkg = await fetchPackage(id);
  console.log(pkg);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Investment Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
          <div key={index} className="p-6 bg-white rounded-md shadow-md">
          <Suspense fallback={<LoadingSpinner/>}/>
            <h2 className="text-lg font-semibold mb-2">{pkg.name}</h2>
            <p className="text-gray-600 mb-2">Amount: {pkg.amount}</p>
            <p className="text-gray-600 mb-2">Period: {pkg.period}</p>
            <p className="text-gray-600 mb-2">ROI: {pkg.ROI}</p>
            <Link
              className="block mt-4"
              href={`/payment?package=${encodeURIComponent(pkg.name)}`}
            >
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
                Subscribe
              </button>
            </Link> 
          </div> 
      </div>
    </div>
  );
};

export default Investments;
