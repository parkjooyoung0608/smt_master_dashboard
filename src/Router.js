import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/smt_master_dashboard" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
