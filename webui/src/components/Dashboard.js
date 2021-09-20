import React, { useState } from "react";
import CreateRecipe from "./CreateRecipe";
import DeleteRecipe from "./DeleteRecipe";
import UpdateRecipe from "./UpdateRecipe";
import ViewRecipe from "./ViewRecipe";
import SignIn from "./SignIn";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserName, getAccessToken } from "../actions";

function Dashboard() {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState("");
  const getRecipeComp = (inputType) => {
    console.log(inputType);
    setSelectedType(inputType);
  };
  const getRecipeCompData = () => {
    if (selectedType === "create") {
      return <CreateRecipe />;
    } else if (selectedType === "update") {
      return <UpdateRecipe />;
    } else if (selectedType === "view") {
      return <ViewRecipe />;
    } else if (selectedType === "delete") {
      return <DeleteRecipe />;
    } else if (selectedType === "logout") {
      return <SignIn />;
    }
  };

  // if (!singInData.accessToken) {
  //   history.push("/");
  //   return;
  // }

  return (
    <div>
      <nav className="text-center  bg-gray-100 py-2">
        <label htmlFor="recipeApp" className="text-3xl text-yellow-800">
          Recipe App
        </label>
      </nav>
      <div className="grid grid-cols-12 ">
        <div className="col-span-4 border-2 flex flex-col text-center text-lg mt-10 px-6">
          <button
            className="no-underline py-2 bg-green-500 text-white rounded"
            onClick={() => {
              getRecipeComp("create");
            }}
          >
            Create Recipe
          </button>
          <button
            className="no-underline py-2 bg-purple-500 text-white rounded my-4"
            onClick={() => {
              getRecipeComp("update");
            }}
          >
            Update Recipe
          </button>
          <button
            className="no-underline py-2 bg-yellow-500 text-white rounded my-4"
            onClick={() => {
              getRecipeComp("view");
            }}
          >
            View Recipe
          </button>

          <button
            className="no-underline py-2 bg-blue-500 text-white rounded my-4"
            onClick={() => {
              getRecipeComp("delete");
            }}
          >
            Delete Recipe
          </button>

          <div className="flex justify-center my-3">
            <NavLink
              className="no-underline px-3 py-2 bg-blue-800 text-white rounded-md"
              to="/signIn"
              onClick={() => {
                dispatch(getUserName(""));
                dispatch(getAccessToken(""));
              }}
            >
              Log Out
            </NavLink>
          </div>
        </div>

        <div className="col-span-1"></div>
        <div className="col-span-7 border-2 mt-10">{getRecipeCompData()}</div>
      </div>
    </div>
  );
}

export default Dashboard;
