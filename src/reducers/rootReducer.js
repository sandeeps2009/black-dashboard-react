// rootReducer.js

import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  // Add other reducers here
});

export default rootReducer;
