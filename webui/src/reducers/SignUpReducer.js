const signUpReducer = (state = {}, action) => {
  switch (action.type) {
    case "FIRST_NAME":
      return (state = { ...state, firstName: action.payload });
    case "LAST_NAME":
      return (state = { ...state, lastName: action.payload });
    case "EMAIL_ID":
      return (state = { ...state, emailId: action.payload });
    case "CREATE_PWD":
      return (state = { ...state, createPwd: action.payload });
    case "CONFIRM_PWD":
      return (state = { ...state, confirmPwd: action.payload });

    default:
      return state;
  }
};
export default signUpReducer;
