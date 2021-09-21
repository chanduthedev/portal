import { combineReducers } from "redux";
import signUpReducer from "./SignUpReducer";
import loginReducer from "./loginReducer";
const rootReducers = combineReducers({
  signUp: signUpReducer,
  login: loginReducer,
});
export default rootReducers;
