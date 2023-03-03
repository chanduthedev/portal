import React from "react";
import { deleteToken, deleteEmail, deleteUserId } from "./Token";
import { useNavigate } from "react-router-dom";
import { getToken } from "./Token";
import Login from "./Login";
import "./../App.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const token = getToken();
  if (!token) {
    return <Login />;
  }

  const LogOut = (e) => {
    e.preventDefault();
    deleteToken();
    deleteEmail();
    deleteUserId();
    navigate("/login");
  };
  const CreateRecipePage = (e) => {
    e.preventDefault();
    navigate("/newRecipe");
  };
  const ShowRecipes = (e) => {
    e.preventDefault();
    navigate("/recipes");
  };
  return (
    <div>
      <h2>Dashboard</h2>
      <button class="button button3" type="submit" onClick={CreateRecipePage}>
        Create Recipe
      </button>
      <br />
      <button class="button button3" type="submit" onClick={ShowRecipes}>
        Show recipes
      </button>
      <br />
      <button class="button button3" type="submit" onClick={LogOut}>
        LogOut
      </button>
    </div>
  );
}
