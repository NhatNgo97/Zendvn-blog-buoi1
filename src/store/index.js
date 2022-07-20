import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import categoryReducer from "./category/reducer";
import postReducer from "./post/reducer";
import userReducer from "./user/reducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
  Post: postReducer,
  User: userReducer,
  Category: categoryReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
