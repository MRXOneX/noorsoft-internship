import {FETCH_EMAIL_FAILURE, FETCH_EMAIL_REQUEST, FETCH_EMAIL_SUCCESS} from "../constans/loginConstans";


const initialState = {
    loginEmail: null
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EMAIL_REQUEST: return {...state, loginEmail: 'запрос'}
        case FETCH_EMAIL_SUCCESS: return {...state, loginEmail: 'успешно'}
        case FETCH_EMAIL_FAILURE: return {...state, loginEmail: action.error}
        default:
            return state
    }
}




export default loginReducer