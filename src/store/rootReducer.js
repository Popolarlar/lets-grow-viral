import { combineReducers } from "redux";
import AdReducer from "./Ad/ad.reducers";

export default combineReducers({ ad: AdReducer });
