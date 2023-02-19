import React from "react";
import { deleteToken, deleteEmail, deleteUserId } from "./Token";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

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
      <button type="submit" onClick={CreateRecipePage}>
        Create Recipe
      </button>
      <br />
      <button type="submit" onClick={ShowRecipes}>
        Show recipes
      </button>
      <br />
      <button type="submit" onClick={LogOut}>
        LogOut
      </button>
    </div>
  );
}
