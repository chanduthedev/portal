import React from "react";
import {
  getToken,
  getUserId,
  deleteEmail,
  deleteToken,
  deleteUserId,
} from "./Token";
import { useNavigate } from "react-router-dom";
import "./../App.css";

async function GetRecipes(RequestBody) {
  console.log("recipeDetails: ", JSON.stringify(RequestBody));
  const username = getUserId().replace(/['"]+/g, "");
  const accessToken = JSON.parse(getToken());
  const uri = "http://localhost:7788/" + username + "/recipes";
  console.log("uri:", uri);
  return fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": accessToken,
    },
  }).then((data) => data.json());
}

function getDate(timeStamp_date) {
  const date = new Date(timeStamp_date);
  return date.getHours() + ":" + date.getMinutes() + ", " + date.toDateString();
}

export default function ShowRecipes() {
  const initState = [];

  const [state, setState] = React.useState(initState);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const userName = getUserId();

    e.preventDefault();
    const response = await GetRecipes({
      userName,
    });
    console.log(response["data"]);
    setState(response["data"]);
  };

  const showDashboard = async (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  const LogOut = (e) => {
    e.preventDefault();
    deleteToken();
    deleteEmail();
    deleteUserId();
    navigate("/login");
  };
  return (
    <div>
      <table>
        <tr>
          <th>Title</th>
          <th>Type</th>
          <th>Cuisine</th>
          <th>Created On</th>
        </tr>
        {state.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.title}</td>
              <td>{val.type}</td>
              <td>{val.cuisine}</td>
              <td>{getDate(val.created_timestamp)}</td>
            </tr>
          );
        })}
      </table>

      <button class="button button3" onClick={handleSubmit}>
        Show Recipes
      </button>
      <button class="button button3" onClick={showDashboard}>
        Dashboard
      </button>
      <button class="button button3" onClick={LogOut}>
        Log Out
      </button>
    </div>
  );
}
