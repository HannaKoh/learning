import {login} from "./login";

export const loginReducer = (state = {},action) => {
    return {
        login: login (state.login, action)
    }
}
