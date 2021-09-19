import React, { useState } from "react";
import getUrl from "../utils/common";
import { useSelector } from "react-redux";

function DeleteRecipe() {
  const [recipeTitle, setRecipeTitle] = useState("");
  const signInState = useSelector((state) => state.login);
  const [errMessage, setErrMessage] = useState("");
  function deleteRecipe() {
    const headers = {};
    headers["Accept"] = "application/json";
    headers["Content-Type"] = "application/json";
    headers["x-access-token"] = signInState.accessToken;

    const apiEndPoint = getUrl("deleteRecipe");
    fetch(`${apiEndPoint}${recipeTitle}`, {
      method: "DELETE",
      headers,
    })
      .then(async (response) => {
        let respData = await response.json();
        console.log("response:%s ", JSON.stringify(respData));
        setErrMessage(respData.message);
      })
      .catch((err) => {
        console.error("Exception ", err);
      });
  }
  return (
    <div className="p-3">
      <div className="flex justify">
        <label htmlFor="recipeID" className="">
          Recipe Title
        </label>
        <input
          type="text"
          placeholder="Recipe ID to delete"
          className=" border-2 border-gray-200 w-8/12 h-7 px-2 text-xl font-light ml-3"
          onChange={(e) => {
            setRecipeTitle(e.target.value);
          }}
        />
      </div>
      <div className=" p-3">
        <label
          htmlFor="instructions"
          className="text-red-800 font-sans text-xl w-28"
        >
          {errMessage}
        </label>
      </div>

      <div className="flex justify-center mt-5">
        <button
          className="bg-red-500 text-white px-10 py-2 rounded"
          onClick={() => {
            deleteRecipe();
          }}
        >
          Delete Recipe
        </button>
      </div>
    </div>
  );
}

export default DeleteRecipe;
