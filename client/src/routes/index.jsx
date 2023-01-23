import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCustomers from "../pages/add-customers";
import DetailsPage from "../pages/details-page";
import HomePage from "../pages/home-page";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailsPage />} />
        <Route path="/add-customers" element={<AddCustomers />} />
      </Routes>
    </div>
  );
};

export default Routing;
