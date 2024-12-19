import { combineReducers } from "redux";

import themeReducer from "./ThemeReducers";
import quizReducer from "./quizReducer";
const rootReducer = combineReducers({
  theme: themeReducer,
  quiz: quizReducer,
});

export default rootReducer;
