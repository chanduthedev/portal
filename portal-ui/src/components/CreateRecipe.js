import React, { useState } from "react";
import {
  getToken,
  getEmail,
  getUserId,
  deleteEmail,
  deleteToken,
  deleteUserId,
} from "./Token";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import "./../App.css";

async function NewRecipe(recipeDetails) {
  console.log("recipeDetails: ", JSON.stringify(recipeDetails));
  const accessToken = JSON.parse(getToken());
  return fetch("http://localhost:7788/recipe/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": accessToken,
    },
    body: JSON.stringify(recipeDetails),
  }).then((data) => data.json());
}

export default function CreateRecipe() {
  const [title, setTitle] = useState();
  const [type, setType] = useState("veg");
  const [cuisine, setCuisine] = useState("indian");
  const [description, setDescription] = useState();
  const navigate = useNavigate();

  const token = getToken();
  if (!token) {
    return <Login />;
  }

  const handleSubmit = async (e) => {
    console.log({ title, type, cuisine, description });
    const email = getEmail().replace(/['"]+/g, "");
    const userName = getUserId().replace(/['"]+/g, "");

    e.preventDefault();
    const response = await NewRecipe({
      userName,
      email,
      title,
      type,
      cuisine,
      description,
    });
    console.log("response: ", JSON.stringify(response));
    navigate("/dashboard");
  };
  const handleCuisine = (event) => {
    setCuisine(event.target.value);
  };

  const updateType = (event) => {
    setType(event.target.value);
  };

  const LogOut = (e) => {
    e.preventDefault();
    deleteToken();
    deleteEmail();
    deleteUserId();
    navigate("/login");
  };
  const ShowDashboard = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div align="center">
      <h3>Create new recipe</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            class="input"
            placeholder="Recipe Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <p>Recipe Type</p>
          <select class="drop-down" value={type} onChange={updateType}>
            <option value="veg">Veg</option>
            <option value="non-veg">Non-Veg</option>
          </select>
        </label>
        <label>
          <p>Recipe Cuisine</p>
          <select class="drop-down" value={cuisine} onChange={handleCuisine}>
            <option value="indian">Indian</option>
            <option value="chinese">Chinese</option>
            <option value="italian">Italian</option>
            <option value="japanese">Japanese</option>
          </select>
        </label>
        <br />
        <div>
          <br />
          <button class="button btn-5" type="submit">
            create
          </button>
        </div>
      </form>
      <div>
        <button class="button btn-4" type="submit" onClick={ShowDashboard}>
          Dashboard
        </button>
        <button class="button btn-4" type="submit" onClick={LogOut}>
          LogOut
        </button>
      </div>
    </div>
  );
}
