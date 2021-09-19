const signUpReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_NAME":
      return (state = { ...state, userName: action.payload });
    case "EMAIL_ID":
      return (state = { ...state, emailId: action.payload });
    case "PASSWORD":
      return (state = { ...state, password: action.payload });
    default:
      return state;
  }
};
export default signUpReducer;
