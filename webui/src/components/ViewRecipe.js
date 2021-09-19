import React, { useState } from "react";
import { useSelector } from "react-redux";
import getUrl from "../utils/common";

function ViewRecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [recipeTitle, setRecipeTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [recipeImage, setRecipeImage] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const signInState = useSelector((state) => state.login);
  function getRecipe() {
    const headers = {};
    headers["Accept"] = "application/json";
    headers["Content-Type"] = "application/json";
    headers["x-access-token"] = signInState.accessToken;

    const apiEndPoint = getUrl("viewRecipe");
    fetch(`${apiEndPoint}${recipeName}`, {
      method: "GET",
      headers,
    })
      .then(async (response) => {
        let respData = await response.json();
        console.log("response:%s ", JSON.stringify(respData));
        setErrMessage(respData.message);

        if (respData.data) {
          setRecipeTitle(respData.data.title);
          setIngredients(respData.data.ingredients);
          setInstructions(respData.data.instructions);
          setRecipeImage(respData.data.image);
        } else {
          setRecipeTitle("");
          setIngredients([]);
          setInstructions([]);
          setRecipeImage("");
        }
      })
      .catch((err) => {
        console.error("Exception ", err);
      });
  }

  return (
    <div className="p-3">
      <div className="flex justify">
        <label htmlFor="recipeID" className="">
          Recipe ID
        </label>
        <input
          type="text"
          className=" border-2 border-gray-200 w-8/12 h-7 px-2 text-xl font-light ml-3"
          onChange={(e) => {
            setRecipeName(e.target.value);
          }}
        />
        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => {
            getRecipe();
          }}
        >
          Get Receip Details
        </button>
      </div>

      <div className=" p-3">
        <label htmlFor="errMsg" className="text-red-800 font-sans text-xl w-28">
          {errMessage}
        </label>
      </div>

      <div>
        <div className="mt-3">
          <label htmlFor="recipeName">Recipe Name:</label>
          <label htmlFor="Biryani" className="ml-8">
            {recipeTitle}
          </label>
        </div>
        <div className="mt-3">
          <label htmlFor="ingredients">Ingredients:</label>
          {ingredients.map((item, index) => {
            return (
              <div key={index} className="ml-32">
                <label htmlFor="" className="">
                  {item.name}:
                </label>
                <label htmlFor="" className="ml-3">
                  {item.amount}
                </label>
              </div>
            );
          })}
        </div>
        <div>
          <label htmlFor="instructions">Instructions:</label>
          {instructions.map((item, index) => {
            return (
              <div key={index} className="ml-32">
                <label htmlFor="">{item.stepNo}.</label>
                <label htmlFor="" className="ml-3">
                  {item.stepDesc}
                </label>
              </div>
            );
          })}
        </div>
        <div className="">
          <label htmlFor="">Ref.Image:</label>
          <img src={recipeImage} alt="BiryaniImage" className="w-56 ml-32" />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button className="bg-red-500 text-white px-10 py-1 rounded">
          Delete Recipe
        </button>
      </div>
    </div>
  );
}

export default ViewRecipe;
