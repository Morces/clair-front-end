import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContext from "./context/AppContext";
import Dashboard from "./Dashboard";
import Microservices from "./Dashboard/Pages/Microservices";
import AllServices from "./Dashboard/Pages/Microservices/components/AllServices";
import ViewService from "./Dashboard/Pages/Microservices/components/SingleService";
import Profile from "./Dashboard/Pages/Profile";
import Summary from "./Dashboard/Pages/Summary";
import UserProfile from "./Dashboard/Pages/Profile/USerProfile";
import AllSummary from "./Dashboard/Pages/Summary/AllSummary";

const APP = () => {
  return (
    <AppContext.Provider value={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Dashboard />}>
            <Route path="dashboard" element={<Summary />}>
              <Route path="" element={<AllSummary />} />
            </Route>
            <Route path="microservices" element={<Microservices />}>
              <Route path="" element={<AllServices />} />
              <Route path="view/:id" element={<ViewService />} />
            </Route>
            <Route path="profile" element={<Profile />}>
              <Route path="" element={<UserProfile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default APP;
