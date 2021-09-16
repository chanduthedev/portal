import React from "react";
import { NavLink } from "react-router-dom";
function SignIn() {
  return (
    <div className="border-2 border-black rounded-md w-6/12 m-auto mt-20">
      <div className="text-center py-4">
        <label htmlFor="signUp" className="text-2xl font-serif">
          Sign In to your Account
        </label>
      </div>
      <div className="mx-4">
        <div className="flex justify-between py-3">
          <label htmlFor="emailId" className="text-blue-900 font-sans text-xl">
            Email ID
          </label>
          <input
            type="text"
            className=" border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
          />
        </div>
        <div className="flex justify-between py-3">
          <label htmlFor="password" className="text-blue-900 font-sans text-xl">
            Password
          </label>
          <input
            type="text"
            className=" border-2 border-gray-200 w-7/12 h-7 px-2 text-xl font-light"
          />
        </div>
        <div className="py-3">
          <label
            htmlFor="forgotPwd"
            className="font-serif  text-blue-800 text-xl"
          >
            Forgot Password ?
          </label>
        </div>
      </div>
      <div className="flex justify-center my-3">
        <NavLink
          className="no-underline px-3 py-2 bg-blue-800 text-white rounded-md"
          to="/dashboard"
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
