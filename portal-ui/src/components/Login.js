import React, { useState } from "react";
import { setToken, setEmail, setUserId } from "./Token";
import { useNavigate } from "react-router-dom";
import "./../App.css";

async function loginUser(credentials) {
  console.log("credentials: ", JSON.stringify(credentials));
  return fetch("http://localhost:7788/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const Home = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const Register = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      userName,
      password,
    });
    console.log("response: ", JSON.stringify(response));
    console.log("Token:", response["data"]["accessToken"]);
    const token = {};
    token["token"] = response["data"]["accessToken"];
    setToken(response["data"]["accessToken"]);
    setEmail(response["data"]["email"]);
    setUserId(response["data"]["userName"]);
    navigate("/dashboard");
  };

  return (
    <div align="center">
      <h3>Please Log In</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            class="input"
            type="text"
            placeholder="Please enter username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            class="input"
            placeholder="Please enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button class="button" type="submit">
            Login
          </button>
          <button class="button" type="submit" onClick={Register}>
            Register
          </button>
        </div>
      </form>
      <div></div>
      <button class="button button2" type="submit" onClick={Home}>
        Home
      </button>
    </div>
  );
}
