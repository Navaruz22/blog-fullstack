import React from "react";
import { Route, Routes } from "react-router-dom";

const PagesRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>HomePage</h1>} />
    </Routes>
  );
};

export default PagesRoute;
