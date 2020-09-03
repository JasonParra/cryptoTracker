import { combineReducers } from "redux";

//Reducers
import crypto from "./crypto";
import wallet from "./wallet";

export default combineReducers({
  crypto,
  wallet
});
