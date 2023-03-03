import React, { useState } from "react";
// import useToken from "./useToken";
import { useNavigate } from "react-router-dom";
import "./../App.css";

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
  const navigate = useNavigate();

  const PreLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

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
  };
  return (
    <div align="center">
      <h3>Please Log In</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=" Enter user name"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <br />

        <input
          type="password"
          placeholder=" Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder=" Enter email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <div>
          <button class="button" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div>
        <button class="button" type="submit" onClick={PreLogin}>
          Home
        </button>
      </div>
    </div>
  );
}
