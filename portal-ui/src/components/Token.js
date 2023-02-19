import { useState } from "react";

function deleteToken() {
  delete sessionStorage["token"];
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  return tokenString;
}
function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function deleteUserId() {
  delete sessionStorage["userName"];
}

function getUserId() {
  const tokenString = sessionStorage.getItem("userName");
  return tokenString;
}
function setUserId(userName) {
  sessionStorage.setItem("userName", JSON.stringify(userName));
}

function deleteEmail() {
  delete sessionStorage["email"];
}

function getEmail() {
  const tokenString = sessionStorage.getItem("email");
  return tokenString;
}
function setEmail(email) {
  sessionStorage.setItem("email", JSON.stringify(email));
}

export {
  getToken,
  setToken,
  deleteToken,
  getEmail,
  setEmail,
  deleteEmail,
  setUserId,
  getUserId,
  deleteUserId,
};
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
