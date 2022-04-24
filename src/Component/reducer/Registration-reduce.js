import {registration} from "./registration";

export const registrationReducer = (state = {},action) => {
    return {
        registration: registration (state.registration, action)
    }
}