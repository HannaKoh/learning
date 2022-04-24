import {LOGIN} from "../const/const";

export const changeLogin = login => {
    return {
        type: LOGIN,
        login
    }
};

