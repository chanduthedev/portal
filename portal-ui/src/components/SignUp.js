import React, { useState } from "react";
// import useToken from "./useToken";
import validator from "validator";
import { setToken } from "./Token";
import { useNavigate } from "react-router-dom";

async function loginUser(credentials) {
  console.log("credentials: ", JSON.stringify(credentials));
  return fetch("http://localhost:7788/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function SignUp() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  // const [token, setToken] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      userName,
      password,
      email,
    });
    console.log("response: ", JSON.stringify(response));
    if (!response.data) {
      console.log("error response:", response);
      return;
    } else {
      navigate("/login");
    }
    // navigate("/login");
  };
  return (
    <div align="center">
      <h3>Please Log In</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
              // console.log("username:", userName);
            }}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <p>email</p>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
