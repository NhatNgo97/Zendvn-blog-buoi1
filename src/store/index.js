import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import categoryReducer from "./category/reducer";
import postReducer from "./post/reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  Post: postReducer,
  User: userReducer,
  Category: categoryReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
