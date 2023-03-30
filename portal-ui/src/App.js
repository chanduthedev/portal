import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PreLogin from "./components/PreLogin";
import SignUp from "./components/SignUp";
import NewRecipe from "./components/CreateRecipe";
import ShowRecipes from "./components/ShowRecipes";
import Candidates from "./components/Candidates";
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
      <h1>Recipe Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PreLogin />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/newRecipe" element={<NewRecipe />}></Route>
          <Route path="/recipes" element={<ShowRecipes />}></Route>
          <Route path="/candidates" element={<Candidates />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
