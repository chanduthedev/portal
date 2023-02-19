import React, { useState } from "react";
// import useToken from "./useToken";
import { setToken, setEmail, setUserId } from "./Token";
import { useNavigate } from "react-router-dom";

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
  // const [token, setToken] = useState();
  const navigate = useNavigate();

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
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
