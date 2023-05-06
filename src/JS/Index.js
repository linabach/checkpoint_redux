import { combineReducers } from "redux";
import taskListReducer from "./Reducer";


const rootReducer= combineReducers({taskListReducer})
export default rootReducer