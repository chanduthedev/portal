import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserName, getPassword, getAccessToken } from "../actions";
import getUrl from "../utils/common";

function SignIn() {
  const dispatch = useDispatch();
  const signInState = useSelector((state) => state.signUp);
  function signInRequest() {
    const headers = {};
    headers["Accept"] = "application/json";
    headers["Content-Type"] = "application/json";
    const body = {};

    body["userName"] = signInState.userName;
    body["password"] = signInState.password;
    const apiEndPoint = getUrl("login");
    console.log("apiEndPoint:%s", apiEndPoint);
    fetch(apiEndPoint, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then(async (response) => {
        let respData = await response.json();
        console.log("response:%s ", JSON.stringify(respData));
        console.log(
          "accessToken:%s ",
          JSON.stringify(respData.data.accessToken)
        );
        dispatch(getAccessToken(respData.data.accessToken));
      })
      .catch((err) => {
        console.error("Exception ", err);
      });
  }

  return (
    <div className="border-2 border-black rounded-md w-6/12 m-auto mt-20">
      <div className="text-center py-4">
        <label htmlFor="signUp" className="text-2xl font-serif">
          Sign In to your Account
        </label>
      </div>
      <div className="mx-4">
        <div className="flex justify-between py-3">
          <label htmlFor="userName" className="text-blue-900 font-sans text-xl">
            User name
          </label>
          <input
            type="text"
            className=" border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
            onChange={(e) => {
              dispatch(getUserName(e.target.value));
            }}
          />
        </div>
        <div className="flex justify-between py-3">
          <label htmlFor="password" className="text-blue-900 font-sans text-xl">
            Password
          </label>
          <input
            type="text"
            className=" border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
            onChange={(e) => {
              dispatch(getPassword(e.target.value));
            }}
          />
        </div>
      </div>
      <div className="flex justify-center my-3">
        <NavLink
          className="no-underline px-3 py-2 bg-blue-800 text-white rounded-md"
          to="/dashboard"
          accesstoken="123"
          onClick={() => {
            signInRequest();
            // console.log(signUpState);
          }}
        >
          Sign In
        </NavLink>
      </div>
      <div className="flex justify-center my-2">
        <NavLink className=" text-black text-sm" to="/">
          ← Back to Home
        </NavLink>
      </div>
    </div>
  );
}

export default SignIn;
