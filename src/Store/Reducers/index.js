import { combineReducers } from "redux";

import themeReducer from "./ThemeReducers";

const rootReducer = combineReducers({
  theme: themeReducer,
  quiz:themeReducer
});

export default rootReducer;
