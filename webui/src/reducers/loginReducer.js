const loginObj = {
  userName: "",
  password: "",
  accessToken: "",
};
const loginReducer = (state = loginObj, action) => {
  switch (action.type) {
    case "USER_NAME":
      return (state = { ...state, userName: action.payload });
    case "PASSWORD":
      console.log("Setting login Password token");
      return (state = { ...state, password: action.payload });
    case "ACCESS_TOKEN":
      console.log("Setting Access token");
      return (state = { ...state, accessToken: action.payload });

    default:
      return state;
  }
};

export default loginReducer;
