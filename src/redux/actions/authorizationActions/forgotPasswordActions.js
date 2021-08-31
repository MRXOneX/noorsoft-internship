import {
    FETCH_FORGOTPASSWORD_FAILURE,
    FETCH_FORGOTPASSWORD_REQUEST,
    FETCH_FORGOTPASSWORD_SUCCESS
} from "../../constans/authorizationConstans/forgotPasswordConstans";

export const forgotPasswordActions = {
    forgotPasswordRequest: (email) => ({type: FETCH_FORGOTPASSWORD_REQUEST, email}),
    forgotPasswordSuccess: () => ({type: FETCH_FORGOTPASSWORD_SUCCESS}),
    forgotPasswordFailure: (error) => ({type: FETCH_FORGOTPASSWORD_FAILURE, error})
}