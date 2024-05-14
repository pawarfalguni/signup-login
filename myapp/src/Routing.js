import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeeData from "./Component/EmployeeData";
// import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<EmployeeData />} />
        {/* <Route path="/register" element={<Dashboard />} /> */}
      </Routes>
    </div>
  );
};

export default Routing;
