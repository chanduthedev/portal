import { useState } from "react";

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  //   const userToken = JSON.parse(tokenString);
  //   return userToken?.token;
  return tokenString;
}
function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
  // setToken(userToken.token);
}

export { getToken, setToken };
// export default function useToken() {
//   //   const [token, setToken] = useState();
//   const getToken = () => {
//     const tokenString = sessionStorage.getItem("token");
//     const userToken = JSON.parse(tokenString);
//     return userToken?.token;
//   };
//   const [token, setToken] = useState(getToken());
//   const saveToken = (userToken) => {
//     sessionStorage.setItem("token", JSON.stringify(userToken));
//     setToken(userToken.token);
//   };

//   return {
//     setToken: saveToken,
//     token,
//   };
// }
