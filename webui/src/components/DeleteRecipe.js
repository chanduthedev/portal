import React from "react";
import BiryaniImg from "../images/Biryani-img.png";

function DeleteRecipe() {
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
          placeholder="Recipe ID to delete"
          className=" border-2 border-gray-200 w-8/12 h-7 px-2 text-xl font-light ml-3"
        />
      </div>

      <div className="flex justify-center mt-5">
        <button className="bg-red-500 text-white px-10 py-2 rounded">
          Delete Recipe
        </button>
      </div>
    </div>
  );
}

export default DeleteRecipe;
