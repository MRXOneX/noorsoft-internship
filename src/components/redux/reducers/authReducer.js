export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

const SET_USER = 'SET_USER'
const initialState = {
    user: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: return {...state, user: action.user}
        default:
            return state
    }
}
export const authActions = {
    setUser: (user) => ({type: SET_USER, user}),
    setUserRequest: () => ({type: FETCH_USER_REQUEST}),
    setUserSuccess: () => ({type: FETCH_USER_SUCCESS}),
    setUserFailure: () => ({type: FETCH_USER_FAILURE})
}
export default authReducer