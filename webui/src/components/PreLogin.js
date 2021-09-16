import React from "react";
import { NavLink } from "react-router-dom";

function PreLogin() {
  return (
    <div className="border-2 border-black w-96 m-auto rounded-md mt-20">
      <div className="text-center text-2xl py-10">
        <label
          htmlFor="recipiApp"
          className="font-serif font-semibold text-black"
        >
          Recipe App
        </label>
      </div>
      <div className="flex justify-center py-5">
        <NavLink
          className="no-underline px-3 py-1 bg-green-500 text-white rounded-md"
          to="/signIn"
        >
          Sign In
        </NavLink>
        <NavLink
          className="no-underline px-3 py-1 bg-blue-500 text-white rounded-md ml-4"
          to="/signUp"
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  );
}

export default PreLogin;
