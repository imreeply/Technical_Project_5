import { combineReducers, createStore } from "redux";
import todoReducer from "../reducer/todoReducer";

const allReducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(allReducer);

export default store;
