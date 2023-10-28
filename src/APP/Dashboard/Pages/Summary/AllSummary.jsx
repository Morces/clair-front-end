import React from "react";
import Recent from "./Recent";

const AllSummary = () => {
    
  return (
    <div className="w-full space-y-6">
      <div className="bg-white p-5 flex justify-between items-center gap-6 max-sm:flex-col max-md:flex-col">
        <div className="flex flex-col gap-2 border p-4 shadow-lg">
          <h3 className="font-base">Total Microservices</h3>
          <h4 className="text-xl font bold">4 </h4>
        </div>
        <div className="flex flex-col gap-2 border p-4 shadow-lg">
          <h3 className="font-base">Resolved Issues</h3>
          <h4 className="text-xl font bold">10</h4>
        </div>
        <div className="flex flex-col gap-2 border p-4 shadow-lg">
          <h3 className="font-base">Total Issues</h3>
          <h4 className="text-xl font bold">15</h4>
        </div>
      </div>

        <Recent />

    </div>
  );
};

export default AllSummary;
