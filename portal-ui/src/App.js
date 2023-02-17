import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PreLogin from "./components/PreLogin";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import useToken from "./components/useToken";

function App() {
  // const [token, setToken] = useState();
  // const { token, setToken } = useToken();
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  return (
    <div className="wrapper" align="center">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PreLogin />}></Route>
          <Route path="/signIn" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
