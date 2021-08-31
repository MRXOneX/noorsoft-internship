import {FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, SET_USER} from "../../constans/authorizationConstans/authConstans";

export const authActions = {
    setUser: (user) => ({type: SET_USER, user}),
    setUserRequest: () => ({type: FETCH_USER_REQUEST}),
    setUserSuccess: () => ({type: FETCH_USER_SUCCESS}),
    setUserFailure: () => ({type: FETCH_USER_FAILURE})
}