import React, { useState } from "react";
// import useToken from "./useToken";
import validator from "validator";
import { setToken } from "./Token";
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

export default function SignUp() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [serviceErrMsg, setServiceErrMsg] = useState("");
  const [errorList, setErrorList] = useState({
    isUserNameError: true,
    userNameErrorMsg: "",
    isEmailError: true,
    emailErrorMsg: "",
    isPwdError: true,
    pwdErrorMsg: "",
    isConfirmPwdError: true,
    confirmErrorMsg: "",
  });
  // const [token, setToken] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    if (
      errorList.isUserNameError ||
      errorList.isEmailError ||
      errorList.isPwdError ||
      errorList.isConfirmPwdError
    ) {
      return;
    }
    e.preventDefault();
    const response = await loginUser({
      userName,
      password,
      email,
    });
    console.log("response: ", JSON.stringify(response));
    if (!response.data) {
      setServiceErrMsg(response.message);
    } else {
      navigate("/login");
    }
    navigate("/login");
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
        <label>
          <p>email</p>
          <input
            type="text"
            onChange={(e) => {
              if (validator.isEmail(e.target.value)) {
                setErrorList({
                  ...errorList,
                  isEmailError: false,
                  emailErrorMsg: "",
                });
              } else {
                setErrorList({
                  ...errorList,
                  isEmailError: true,
                  emailErrorMsg: "Not a valid email format.",
                });
              }
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
