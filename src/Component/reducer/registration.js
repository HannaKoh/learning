import {REGISTRATION} from "../const/const";

export const registration = (state = '', action) => {
    if (action.type === 'REGISTRATION') {
        return action.registration
    } else {
        return state
    }
}