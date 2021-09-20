import React, { useState } from "react";
import { useSelector } from "react-redux";
import { viewRecipeService } from "../services/RecipeServices";
import { getCommonHeaders } from "../utils/common";

function ViewRecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [recipeTitle, setRecipeTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [recipeImage, setRecipeImage] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const signInState = useSelector((state) => state.login);
  async function getRecipe() {
    const headers = getCommonHeaders();
    headers["x-access-token"] = signInState.accessToken;

    const respData = await viewRecipeService(recipeName, headers);
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
  }

  return (
    <div className="p-3">
      <div className="flex justify">
        <label htmlFor="recipeID" className="">
          Recipe ID
        </label>
        <div className="w-7/12">
          <input
            type="text"
            className=" border-2 border-gray-200 w-full h-7 px-2 text-xl font-light"
            onChange={(e) => {
              if (e.target.value.length > 5) {
                // setRecipeName(e.target.value);
                setErrMessage("");
              } else {
                setErrMessage("Recipe title should be atleast 5 letters.");
              }
              setRecipeName(e.target.value);
            }}
          />
          <label htmlFor="" className="text-red-500 text-smz">
            {errMessage}
          </label>
        </div>

        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => {
            getRecipe();
          }}
        >
          Get Receip Details
        </button>
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
