import { combineReducers } from "redux";
import signUpReducer from "./signUpReducer";
import loginReducer from "./loginReducer";
const rootReducers = combineReducers({
  signUp: signUpReducer,
  login: loginReducer,
});
export default rootReducers;
