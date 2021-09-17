import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserName, getEmailId, getPassword } from "../actions";
import getUrl from "../utils/common";

function SignUp() {
  const dispatch = useDispatch();
  const signUpState = useSelector((state) => state.signUp);

  function signUpRequest() {
    const headers = {};
    headers["Accept"] = "application/json";
    headers["Content-Type"] = "application/json";
    // headers["Access-Control-Allow-Origin"] = "http://localhost:7788";
    // headers["Access-Control-Allow-Credentials"] = "true";
    const body = {};

    body["userName"] = signUpState.userName;
    body["password"] = signUpState.password;
    body["email"] = signUpState.emailId;

    const apiEndPoint = getUrl("register");
    // loginRequest();
    fetch(apiEndPoint, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then(async (response) => {
        let data = await response.json();
        console.log("response:%s ", JSON.stringify(data));
      })
      .catch((err) => {
        console.error("Exception ", err);
      });
  }

  return (
    <div className="border-2 border-black rounded-md w-6/12 m-auto mt-20">
      <div className="text-center py-4">
        <label htmlFor="signUp" className="text-2xl font-serif">
          Sign Up for a New Account
        </label>
      </div>
      <div className="mx-4">
        <div className="flex justify-between py-3">
          <label htmlFor="userName" className="text-blue-900 font-sans text-xl">
            User Name
          </label>
          <input
            type="text"
            className=" border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
            onChange={(e) => {
              // console.log(e.target.value);
              dispatch(getUserName(e.target.value));
            }}
          />
        </div>
        <div className="flex justify-between py-3">
          <label htmlFor="emailId" className="text-blue-900 font-sans text-xl">
            Email ID
          </label>
          <input
            type="text"
            className=" border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
            onChange={(e) => {
              dispatch(getEmailId(e.target.value));
            }}
          />
        </div>
        <div className="flex justify-between py-3">
          <label
            htmlFor="createPassword"
            className="text-blue-900 font-sans text-xl"
          >
            Create Password
          </label>
          <input
            type="text"
            className=" border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
            // onChange={(e) => {
            //   dispatch(getPassword(e.target.value));
            // }}
          />
        </div>
        <div className="flex justify-between py-3">
          <label
            htmlFor="confirmPassword"
            className="text-blue-900 font-sans text-xl"
          >
            Confirm Password
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
          to="/signIn"
          onClick={() => {
            signUpRequest();
            // console.log(signUpState);
          }}
        >
          Create Account
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

export default SignUp;
