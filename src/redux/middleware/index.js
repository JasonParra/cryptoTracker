import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import persist from "./persist";

export default applyMiddleware(thunk, persist);
