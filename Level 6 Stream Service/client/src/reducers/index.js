import { combineReducers } from "redux";

import authReducer from "./authReducer";

export default combineReducers({
    state1: "value",
    auth: authReducer
});
