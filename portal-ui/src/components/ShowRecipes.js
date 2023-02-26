import React from "react";
import Dashboard from "./Dashboard";
// import Login from "./Login";
import { getToken, getUserId, deleteEmail, deleteToken, deleteUserId } from "./Token";
import { useNavigate } from "react-router-dom";

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
          <th>Created Date</th>
        </tr>
        {state.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.title}</td>
              <td>{val.type}</td>
              <td>{val.cuisine}</td>
              <td>{val.created_timestamp}</td>
            </tr>
          );
        })}
      </table>

      <button onClick={handleSubmit}>Show Recipes</button>
      <button onClick={showDashboard}>Dashboard</button>
      <button onClick={LogOut}>Log Out</button>
    </div>
  );
}
