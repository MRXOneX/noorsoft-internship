import {
    FETCH_REGISTRATION_FAILURE,
    FETCH_REGISTRATION_REQUEST,
    FETCH_REGISTRATION_SUCCESS
} from "../../constans/authorizationConstans/registrationConstans";


export const registrationActions = {
    setRegistrationRequest: (email, password) =>({type: FETCH_REGISTRATION_REQUEST, email, password}),
    setRegistrationSuccess: () => ({type: FETCH_REGISTRATION_SUCCESS}),
    setRegistrationFailure: (error) => ({type: FETCH_REGISTRATION_FAILURE, error})
}