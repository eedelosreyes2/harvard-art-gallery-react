import getWorksReducer from "./getWorksReducer";
import getListsReducer from "./getListsReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    works: getWorksReducer,
    lists: getListsReducer,
});

export default allReducers;
