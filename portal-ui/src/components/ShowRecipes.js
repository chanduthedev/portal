import React from "react";
import Dashboard from "./Dashboard";
import { getToken } from "./Token";
import { useNavigate } from "react-router-dom";

export default function ShowRecipes() {
  const initState = [
    { id: 1, name: "bread", quantitiy: 50, location: "cupboard" },
    { id: 2, name: "milk", quantitiy: 20, location: "fridge" },
    { id: 3, name: "water", quantitiy: 10, location: "fridge" },
  ];
  const [state, setState] = React.useState(initState);
  return (
    <table>
      <tr key={"header"}>
        {Object.keys(state[0]).map((key) => (
          <th>{key}</th>
        ))}
      </tr>
      {state.map((item) => (
        <tr key={item.id}>
          {Object.values(item).map((val) => (
            <td>{val}</td>
          ))}
        </tr>
      ))}
    </table>
  );
}
