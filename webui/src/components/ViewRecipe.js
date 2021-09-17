import React from "react";
import BiryaniImg from "../images/Biryani-img.png";

function ViewRecipe() {
  const ingredients = [
    {
      itemName: "Spices",
      itemQuantity: "100gms",
    },
    {
      itemName: "Oil",
      itemQuantity: "l00ml",
    },
    {
      itemName: "Salt",
      itemQuantity: "10gms",
    },
    {
      itemName: "Rice",
      itemQuantity: "500gms",
    },
  ];
  const instructions = [
    {
      itemStepNo: "1",
      itemDesc: "Take 200ml of water",
    },
    {
      itemStepNo: "2",
      itemDesc: "Boil the water",
    },
    {
      itemStepNo: "3",
      itemDesc: "Put spices and rice in water",
    },
  ];
  return (
    <div className="p-3">
      <div className="flex justify">
        <label htmlFor="recipeID" className="">
          Recipe ID
        </label>
        <input
          type="text"
          className=" border-2 border-gray-200 w-8/12 h-7 px-2 text-xl font-light ml-3"
        />
        <button className="bg-red-500 text-white px-3 py-1 rounded">
          Search
        </button>
      </div>
      <div>
        <div className="mt-3">
          <label htmlFor="recipeName">Recipe Name:</label>
          <label htmlFor="Biryani" className="ml-8">
            Biryani
          </label>
        </div>
        <div className="mt-3">
          <label htmlFor="ingredients">Ingredients:</label>
          {ingredients.map((item, index) => {
            return (
              <div key={index} className="ml-32">
                <label htmlFor="" className="">
                  {item.itemName}:
                </label>
                <label htmlFor="" className="ml-3">
                  {item.itemQuantity}
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
                <label htmlFor="">{item.itemStepNo}.</label>
                <label htmlFor="" className="ml-3">
                  {item.itemDesc}
                </label>
              </div>
            );
          })}
        </div>
        <div className="">
          <label htmlFor="">Ref.Image:</label>
          <img src={BiryaniImg} alt="BiryaniImage" className="w-56 ml-32" />
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
