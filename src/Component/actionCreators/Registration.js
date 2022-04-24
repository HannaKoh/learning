import {REGISTRATION} from "../const/const";

export const changeRegistration = registration => {
    return {
        type: REGISTRATION,
        registration
    }
};
