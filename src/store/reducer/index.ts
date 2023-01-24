import {combineReducers} from "redux";
import weatherReducer from "./weatherReducer";
import requestReducer from "./requestReducer";

const reducer = combineReducers({
    weatherReducer,
    requestReducer
})

export default reducer