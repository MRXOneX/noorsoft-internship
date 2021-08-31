import {
    FETCH_FORGOTPASSWORD_FAILURE,
    FETCH_FORGOTPASSWORD_REQUEST,
    FETCH_FORGOTPASSWORD_SUCCESS
} from "../../constans/authorizationConstans/forgotPasswordConstans";

const initialState = {
    forgotPassword: null
}

const forgotPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FORGOTPASSWORD_REQUEST: return {...state, forgotPassword: 'запрос'}
        case FETCH_FORGOTPASSWORD_SUCCESS: return {...state, forgotPassword: 'успешно'}
        case FETCH_FORGOTPASSWORD_FAILURE: return {...state, forgotPassword: action.error}
        default:
            return state
    }
}




export default forgotPasswordReducer