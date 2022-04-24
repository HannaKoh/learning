import {LOGIN} from "../const/const";

export const login = (state = '', action) => {
    if (action.type === 'LOGIN') {
        return action.login
    } else {
        return state
    }
}
