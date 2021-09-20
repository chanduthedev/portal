import React, { useState } from "react";
import { useSelector } from "react-redux";
import { deleteRecipeService } from "../services/RecipeServices";
import { getCommonHeaders } from "../utils/common";

function DeleteRecipe() {
  const [recipeTitle, setRecipeTitle] = useState("");
  const signInState = useSelector((state) => state.login);
  const [errMessage, setErrMessage] = useState("");
  async function deleteRecipe() {
    const headers = getCommonHeaders();
    headers["x-access-token"] = signInState.accessToken;

    const respData = await deleteRecipeService(recipeTitle, headers);

    setErrMessage(respData.message);
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
