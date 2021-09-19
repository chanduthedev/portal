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
      return (state = { ...state, password: action.payload });
    case "ACCESS_TOKEN":
      return (state = { ...state, accessToken: action.payload });

    default:
      return state;
  }
};

export default loginReducer;
