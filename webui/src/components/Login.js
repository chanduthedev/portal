import React, { useState, useEffect } from "react";
function Login() {
  const [accessToken, setAccessToken] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const loginRequest = async () => {
    const headers = {};
    headers["Accept"] = "application/json";
    headers["Content-Type"] = "application/json";
    const body = {};
    body["userName"] = userName;
    body["password"] = password;
    // loginRequest();
    fetch("http://localhost:7788/user/login", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then(async (response) => {
        let responseData = await response.json();
        if (responseData.data) {
          const jsonData = responseData.data;
          setAccessToken(jsonData["accessToken"]);
          setErrMsg("");
        } else {
          setErrMsg(responseData.message);
          setAccessToken("");
        }
      })
      .catch((err) => {
        console.error("Exception ", err);
      });
  };
  return (
    <div>
      <h1> Welcome Login Page!!!</h1>
      <label>Username</label>
      <input
        type="text"
        name="username"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      ></input>
      <label>Password</label>
      <input
        type="text"
        name="username"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button onClick={loginRequest}>Login</button>
      {/* {errMsg ? { errMsg } : { accessToken }} */}
      accessToken:{accessToken}
      errMsg:{errMsg}
    </div>
  );
}

export default Login;
