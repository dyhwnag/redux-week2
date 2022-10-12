import { createStore } from "redux";
import { combineReducers } from "redux";
import todoData from "../modules/todoData";

const rootReducer = combineReducers({
    todoData,
});
const store = createStore(rootReducer);

export default store;