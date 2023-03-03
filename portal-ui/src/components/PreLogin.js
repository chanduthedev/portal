import React from "react";
import Dashboard from "./Dashboard";
import { getToken } from "./Token";
import { useNavigate } from "react-router-dom";
import "./../App.css";

export default function Prelogin() {
  const navigate = useNavigate();
  const token = getToken();
  if (token) {
    return <Dashboard />;
  }

  const LogIn = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const Register = (e) => {
    e.preventDefault();
    navigate("/register");
  };
  return (
    <div>
      <button class="button" type="submit" onClick={LogIn}>
        Login
      </button>
      <br />
      <button class="button" type="submit" onClick={Register}>
        Register
      </button>
    </div>
  );
}
