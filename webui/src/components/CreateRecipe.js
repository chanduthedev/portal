import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngName_Quatity, getStepNo_desc } from "../actions";

function CreateRecipe() {
  const dispatch = useDispatch();
  const create_Data = useSelector((state) => state.createRecipe);
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientQty, setIngredientQty] = useState("");
  const [stepNum, setStepNum] = useState("");
  const [stepDesc, setStepDesc] = useState("");
  return (
    <div className="p-3">
      <div className="flex justify-between p-3">
        <label htmlFor="recipeName" className="text-blue-900 font-sans text-xl">
          Recipe Name :
        </label>
        <input
          type="text"
          className=" border-2 border-gray-200 w-8/12 h-7 px-2 text-xl font-light"
        />
      </div>
      <div className=" p-3">
        <label
          htmlFor="ingredients"
          className="text-blue-900 font-sans text-xl"
        >
          Ingredients :
        </label>
        <div className="flex justify-between mt-2">
          <label
            htmlFor="ingredientName"
            className="text-blue-900 font-sans text-xl  w-28"
          >
            Name
          </label>
          <input
            type="text"
            className=" border-2 border-gray-200 w-3/12 h-7 px-2 text-xl font-light ml-2"
            onChange={(e) => {
              setIngredientName(e.target.value);
            }}
          />
          <label
            htmlFor="ingredientQuantity"
            className="text-blue-900 font-sans text-xl w-28"
          >
            Quantity
          </label>
          <input
            type="text"
            className=" border-2 border-gray-200 w-3/12 h-7 px-2 text-xl font-light ml-2"
            onChange={(e) => {
              setIngredientQty(e.target.value);
            }}
          />
          <button
            className="bg-green-500 text-white px-3 py-1 rounded"
            onClick={() => {
              var obj = {
                ing_Name: ingredientName,
                ing_Qty: ingredientQty,
              };
              dispatch(getIngName_Quatity(obj));
              setIngredientName("");
              setIngredientQty("");
            }}
          >
            Add/Update
          </button>
        </div>
      </div>
      <div className=" p-3">
        <label
          htmlFor="instructions"
          className="text-blue-900 font-sans text-xl w-28"
        >
          Instructions :
        </label>
        <div className="flex justify-between mt-2">
          <label
            htmlFor="stepNo"
            className="text-blue-900 font-sans text-xl w-28"
          >
            Step No.
          </label>
          <input
            type="text"
            className=" border-2 border-gray-200 w-3/12 h-7 px-2 text-xl font-light ml-2"
            onChange={(e) => {
              setStepNum(e.target.value);
            }}
          />
          <label
            htmlFor="description"
            className="text-blue-900 font-sans text-xl w-28 "
          >
            Description
          </label>
          <input
            type="text"
            className=" border-2 border-gray-200 w-3/12 h-7 px-2 text-xl font-light ml-2"
            onChange={(e) => {
              setStepDesc(e.target.value);
            }}
          />
          <button
            className="bg-green-500 text-white px-3 py-1 rounded"
            onClick={() => {
              var obj1 = {
                inst_stepNum: stepNum,
                inst_stepDesc: stepDesc,
              };
              dispatch(getStepNo_desc(obj1));
              setStepNum("");
              setStepDesc("");
            }}
          >
            Add/Update
          </button>
        </div>
      </div>
      <div className="p-3">
        <label
          htmlFor="refImage"
          className="text-blue-900 font-sans text-xl w-32"
        >
          Ref.Image :
        </label>
        <div className="mt-2">
          <label
            htmlFor="plsUploadImg"
            className="text-blue-900 font-sans text-xl"
          >
            Please upload ref. image:
          </label>
          <button className="bg-green-600 text-white px-3 py-1 rounded ml-3">
            Upload Image
          </button>
        </div>
      </div>
      <div className="mt-5 flex justify-center ">
        <button className="bg-green-600 text-white px-10 py-1 rounded">
          Create Recipe
        </button>
      </div>
    </div>
  );
}

export default CreateRecipe;
