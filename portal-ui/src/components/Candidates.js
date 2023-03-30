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

function queryStringFromMap(filterDetails) {
  let queryStr = "?";
  for (const [key, value] of Object.entries(filterDetails)) {
    console.log(key, value);
    if (value.length) {
      queryStr = queryStr + key + "=" + value + "&";
    }
  }
  return queryStr.slice(0, -1);
}

async function GetCandidates(filterDetails) {
  console.log("recipeDetails: ", JSON.stringify(filterDetails));
  const accessToken = JSON.parse(getToken());
  const queryStr = queryStringFromMap(filterDetails);
  console.log(queryStr);
  return fetch("http://localhost:7788/employees" + queryStr, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": accessToken,
    },
  }).then((data) => data.json());
}

export default function CreateRecipe() {
  const initState = [];

  const [state, setState] = React.useState(initState);
  const [title, setTitle] = useState("");
  const [titles, setTitles] = useState(initState);
  const [city, setCity] = useState("");
  const [cities, setCities] = useState(initState);
  const [stateName, setStateName] = useState("");
  const [stateNames, setStateNames] = useState(initState);
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState(initState);
  const [postalCode, setPostalCode] = useState("");
  const [postalCodes, setPostalCodes] = useState(initState);
  const [sicCode, setSicCode] = useState("");
  const [sicCodes, setSicCodes] = useState(initState);
  const navigate = useNavigate();

  const token = getToken();
  if (!token) {
    return <Login />;
  }

  function clearFilters() {
    setTitle("");
    setCity("");
    setStateName("");
    setCountry("");
    setPostalCode("");
    setSicCode("");
  }

  function loadFilterData(responeData) {
    // Skip loading data if already loaded
    if (titles.length) {
      return;
    }
    const tempTitles = responeData.map(function (el) {
      return el.title;
    });
    setTitles([...new Set(tempTitles)].sort());

    const tempCities = responeData.map(function (el) {
      return el.city;
    });
    setCities([...new Set(tempCities)].sort());

    const tempStateNames = responeData.map(function (el) {
      return el.state;
    });
    setStateNames([...new Set(tempStateNames)].sort());

    const tempCountries = responeData.map(function (el) {
      return el.country;
    });
    setCountries([...new Set(tempCountries)].sort());

    const tempPostalCodes = responeData.map(function (el) {
      return el.postal_code;
    });
    setPostalCodes([...new Set(tempPostalCodes)].sort());

    const tempSicCodes = responeData.map(function (el) {
      return el.sic_code;
    });
    setSicCodes([...new Set(tempSicCodes)].sort());
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await GetCandidates({
      title,
      city,
      state: stateName,
      country,
      postalCode,
      sicCode,
    });
    console.log("response: ", JSON.stringify(response));
    const respData = response["data"];
    respData.forEach((item, index) => {
      item.serial = index + 1;
    });
    setState(respData);
    loadFilterData(respData);
    // clearFilters();
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleCity = (event) => {
    setCity(event.target.value);
  };
  const handleStateName = (event) => {
    setStateName(event.target.value);
  };
  const handleCountry = (event) => {
    setCountry(event.target.value);
  };
  const handlePostalCode = (event) => {
    setPostalCode(event.target.value);
  };
  const handleSicCode = (event) => {
    setSicCode(event.target.value);
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
  const ClearFilters = (e) => {
    e.preventDefault();
    setTitle("");
    setCity("");
    setStateName("");
    setCountry("");
    setPostalCode("");
    setSicCode("");
  };

  return (
    <div>
      <div class="row">
        <h3>Show Candidate Details</h3>
        <div class="column">
          <form onSubmit={handleSubmit}>
            <label>
              <p>Title</p>
              <select class="drop-down" value={title} onChange={handleTitle}>
                {titles.map((option, key) => (
                  <option key={key}>{option}</option>
                ))}
              </select>
            </label>
            <br />
            <label>
              <p>Cities</p>
              <select class="drop-down" value={city} onChange={handleCity}>
                {cities.map((option, key) => (
                  <option key={key}>{option}</option>
                ))}
              </select>
            </label>
            <br />

            <label>
              <p>State Names</p>
              <select
                class="drop-down"
                value={stateName}
                onChange={handleStateName}
              >
                {stateNames.map((option, key) => (
                  <option key={key}>{option}</option>
                ))}
              </select>
            </label>
            <br />

            <label>
              <p>Countries</p>
              <select
                class="drop-down"
                value={country}
                onChange={handleCountry}
              >
                {countries.map((option, key) => (
                  <option key={key}>{option}</option>
                ))}
              </select>
            </label>
            <br />
            <label>
              <p>Postal Code</p>
              <select
                class="drop-down"
                value={postalCode}
                onChange={handlePostalCode}
              >
                {postalCodes.map((option, key) => (
                  <option key={key}>{option}</option>
                ))}
              </select>
            </label>
            <br />
            <label>
              <p>SIC Codes</p>
              <select
                class="drop-down"
                value={sicCode}
                onChange={handleSicCode}
              >
                {sicCodes.map((option, key) => (
                  <option key={key}>{option}</option>
                ))}
              </select>
            </label>
            <br />
            <div>
              <br />
              <button class="button btn-5" type="submit">
                Show Candidates
              </button>
            </div>
          </form>
          <button class="button btn-4" type="submit" onClick={ShowDashboard}>
            Dashboard
          </button>
          <button class="button btn-4" type="submit" onClick={ClearFilters}>
            Clear Filters
          </button>
          <button class="button btn-4" type="submit" onClick={LogOut}>
            LogOut
          </button>
        </div>

        <div class="column">
          <table>
            <tr>
              <th>Serial #</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone#</th>
              <th>Email</th>
              <th>Company Name</th>
              <th>Title</th>
              <th>Industry</th>
              <th>City</th>
              <th>State</th>
              <th>Country</th>
              <th>Postal Code</th>
              <th>Web Site</th>
              <th>Address</th>
              <th>SIC Code</th>
              {/* <th>Description</th> */}
            </tr>
            {state.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.serial}</td>
                  <td>{val.first_name}</td>
                  <td>{val.last_name}</td>
                  <td>{val.phone_no}</td>
                  <td>{val.email}</td>
                  <td>{val.company_name}</td>
                  <td>{val.title}</td>
                  <td>{val.industry}</td>
                  <td>{val.city}</td>
                  <td>{val.state}</td>
                  <td>{val.country}</td>
                  <td>{val.postal_code}</td>
                  <td>{val.url}</td>
                  <td>{val.address}</td>
                  <td>{val.sic_code}</td>
                  {/* <td>{val.biz_description}</td> */}
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
