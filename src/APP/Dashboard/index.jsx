import React from "react";
import SideNav from "./SideNav";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="mt-0 main flex h-fit p-4 shadow-2xl">
      <SideNav />
      <div className="sticky top-0 flex-grow min-h-screen">
        <TopBar />
        <div className="h-fit bg-anti-flash-white pt-7 pb-14 pl-3 md:pl-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
