import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecipeTitle,
  getIngradient,
  getInstruction,
  getRecipeImage,
} from "../actions";
import getUrl from "../utils/common";
import ImageUploading from "react-images-uploading";

function UpdateRecipe() {
  const dispatch = useDispatch();
  const recipeData = useSelector((state) => state.recipe);
  const singInData = useSelector((state) => state.login);
  const [ingradientName, setIngradientName] = useState("");
  const [ingradientAmount, setIngradientAmount] = useState("");
  const [stepNum, setStepNum] = useState(0);
  const [stepDesc, setStepDesc] = useState("");
  const [images, setImages] = useState([]);
  const [responseCode, setResponseCode] = useState(0);
  const [errMessage, setErrMessage] = useState("");
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    if (imageList.length && imageList[0].data_url) {
      console.log("Image loaded");
      dispatch(getRecipeImage(imageList[0].data_url));
    }
    console.log(addUpdateIndex);
    setImages(imageList);
  };

  function updateRecipeRequest() {
    const headers = {};
    headers["Accept"] = "application/json";
    headers["Content-Type"] = "application/json";
    headers["x-access-token"] = singInData.accessToken;
    const body = {};

    body["userName"] = singInData.userName;
    body["title"] = recipeData.title;
    body["ingredients"] = recipeData.ingredients;
    body["instructions"] = recipeData.instructions;
    body["image"] = recipeData.image;
    const apiEndPoint = getUrl("updateRecipe");

    fetch(apiEndPoint, {
      method: "PATCH",
      headers,
      body: JSON.stringify(body),
    })
      .then(async (response) => {
        let respData = await response.json();
        setResponseCode(respData.code);
        setErrMessage(respData.message);
      })
      .catch((err) => {
        console.error("Exception ", err);
      });
  }

  return (
    <div className="p-3">
      <div className="flex justify-between p-3">
        <label htmlFor="recipeName" className="text-blue-900 font-sans text-xl">
          Recipe Name :
        </label>
        <input
          type="text"
          className=" border-2 border-gray-200 w-8/12 h-7 px-2 text-xl font-light"
          aria-label="recipeTitle"
          onChange={(e) => {
            dispatch(getRecipeTitle(e.target.value));
          }}
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
              setIngradientName(e.target.value);
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
              setIngradientAmount(e.target.value);
            }}
          />
          <button
            className="bg-purple-500 text-white px-3 py-1 rounded"
            onClick={() => {
              var ingradientObj = {
                name: ingradientName,
                amount: ingradientAmount,
              };
              console.log("ingradientObj:%s", JSON.stringify(ingradientObj));
              dispatch(getIngradient(ingradientObj));
              setIngradientName("");
              setIngradientAmount("");
            }}
          >
            Add Inredient
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
            className="bg-purple-500 text-white px-3 py-1 rounded"
            onClick={() => {
              var instructionObj = {
                stepNo: stepNum,
                stepDesc: stepDesc,
              };
              console.log("Instructions:%s", JSON.stringify(instructionObj));
              dispatch(getInstruction(stepDesc));
              setStepNum("");
              setStepDesc("");
            }}
          >
            Add Instruction
          </button>
        </div>
      </div>
      <div className="p-3">
        <div className="mt-2">
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <div className="mt-2">
                  <label
                    htmlFor="plsUploadImg"
                    className="text-blue-900 font-sans text-xl"
                  >
                    Recipe image:
                  </label>
                  <button
                    className="bg-green-600 text-white px-3 py-1 rounded ml-3"
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Upload Image
                  </button>
                </div>
                &nbsp;
                {imageList.map((image, index) => (
                  <div
                    key={index}
                    className="flex items-center  justify-center"
                  >
                    <img
                      src={image.data_url}
                      alt=""
                      width="350"
                      className="px-5"
                    />
                    <button
                      className="bg-green-600 h-10 px-3 border-2 text-white"
                      onClick={() => onImageUpdate(index)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-600 h-10 px-3 border-2 text-white"
                      onClick={() => onImageRemove(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </div>
      </div>
      <div className="mt-5 flex justify-center ">
        <button
          className="bg-purple-500 text-white px-10 py-1 rounded"
          onClick={() => {
            // alert("Hello");
            console.log(recipeData);
            // console.log("signInState");
            updateRecipeRequest();
          }}
        >
          Update Recipe
        </button>
      </div>
    </div>
  );
}

export default UpdateRecipe;
