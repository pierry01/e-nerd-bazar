import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/login" />} /> */}
      <Route path="/" element={<h1>HOME</h1>} />

      {/* <Route path="network-error" element={<NetworkError />} />
      <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
}

export default Router;
