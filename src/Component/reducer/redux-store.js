import {combineReducers, createStore} from "redux";
import {loginReducer} from "./Login-reducer";
import {registrationReducer} from "./Registration-reduce";

let Reducers = combineReducers({
        login: loginReducer,
    registration: registrationReducer
    }
);

export default Reducers;