import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />

      {/* <Route path="network-error" element={<NetworkError />} /> */}
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
}

export default Router;
