import React from "react";
import Dashboard from "./Dashboard";
import { getToken } from "./Token";

export default function Prelogin() {
  const token = getToken();
  if (token) {
    // return <Login setToken={setToken} />;
    return <Dashboard />;
  }
  return <h2>Prelogin</h2>;
}
