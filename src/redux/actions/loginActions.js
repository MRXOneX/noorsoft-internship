import {FETCH_EMAIL_FAILURE, FETCH_EMAIL_REQUEST, FETCH_EMAIL_SUCCESS} from "../constans/loginConstans";

export const loginEmailActions = {
    setEmailRequest: (email, password) => ({type: FETCH_EMAIL_REQUEST, email ,password}),
    setEmailSuccess: () => ({type: FETCH_EMAIL_SUCCESS}),
    setEmailFailure: (error) => ({type: FETCH_EMAIL_FAILURE, error})
}
