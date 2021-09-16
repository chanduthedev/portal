import { combineReducers } from "redux";
import SignUpReducer from "./SignUpReducer";
import CreateReducer from "./CreateReducer";
const rootReducers = combineReducers({
  signUp: SignUpReducer,
  createRecipe: CreateReducer,
});
export default rootReducers;
