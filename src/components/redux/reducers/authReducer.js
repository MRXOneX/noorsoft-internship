const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
const initialState = {
    user: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST: return {...state, user: action.user}
        default:
            return state
    }
}
export const setUserRequest = (user) => ({type: FETCH_USER_REQUEST, user})
export default authReducer