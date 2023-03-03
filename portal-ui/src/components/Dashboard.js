import React from "react";
import { deleteToken, deleteEmail, deleteUserId } from "./Token";
import { useNavigate } from "react-router-dom";
import { getToken } from "./Token";
import Login from "./Login";
import "./../App.css";

async function GetRecipes(RequestBody) {
  console.log("recipeDetails: ", JSON.stringify(RequestBody));
  const accessToken = JSON.parse(getToken());
  return fetch("http://localhost:7788/recipes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": accessToken,
    },
    body: JSON.stringify(RequestBody),
  }).then((data) => data.json());
}

export default function Dashboard() {
  const initState = [
    { id: 1, name: "bread", quantitiy: 50, location: "cupboard" },
    { id: 2, name: "milk", quantitiy: 20, location: "fridge" },
    { id: 3, name: "water", quantitiy: 10, location: "fridge" },
  ];
  const navigate = useNavigate();
  const [data, setData] = React.useState(initState);

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

    // const handleSubmit = async (e) => {
    //   const userName = getUserId();

    //   e.preventDefault();
    //   const response = await GetRecipes({
    //     userName,
    //   });
    //   console.log("response: ", JSON.stringify(response));
    //   setData(response["data"]);
    //   // navigate("/dashboard");
    // };
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
