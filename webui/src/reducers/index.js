import { combineReducers } from "redux";
import signUpReducer from "./signUpReducer";
import recipeReducer from "./recipeReducer";
import loginReducer from "./loginReducer";
const rootReducers = combineReducers({
  signUp: signUpReducer,
  recipe: recipeReducer,
  login: loginReducer,
});
export default rootReducers;
