import {
    FETCH_UPDATEPASSWORD_FAILURE,
    FETCH_UPDATEPASSWORD_REQUEST,
    FETCH_UPDATEPASSWORD_SUCCESS
} from "../../constans/authorizationConstans/updatePasswordConstans";


export const updatePasswordActions = {
    updatePasswordRequest: (code, newPassword) => ({type: FETCH_UPDATEPASSWORD_REQUEST, code, newPassword}),
    updatePasswordSuccess: () => ({type: FETCH_UPDATEPASSWORD_SUCCESS}),
    updatePasswordFailure: () => ({type: FETCH_UPDATEPASSWORD_FAILURE})
}