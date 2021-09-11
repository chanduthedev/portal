import React, { useState, useEffect } from "react";
function SignUp() {
  const [accessToken, setAccessToken] = useState();
  console.log("accessToken:%s", accessToken);

  useEffect(() => {
    const headers = {};
    headers["Accept"] = "application/json";
    headers["Content-Type"] = "application/json";
    // headers["Access-Control-Allow-Origin"] = "http://localhost:7788";
    // headers["Access-Control-Allow-Credentials"] = "true";
    const body = {};

    body["userName"] = "webapp";
    body["password"] = "test123";
    body["email"] = "chanduthedev@gmail.com";
    // loginRequest();
    fetch("http://localhost:7788/user/register", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then(async (response) => {
        let data = await response.json();
        console.log("response:%s ", JSON.stringify(data));
      })
      .catch((err) => {
        console.error("Exception ", err);
      });
  }, []);

  return (
    <div>
      <h1> Welcome SignUp Page</h1>
    </div>
  );
}

export default SignUp;
