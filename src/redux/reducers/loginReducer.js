import {
    FETCH_EMAIL_FAILURE, FETCH_EMAIL_REQUEST, FETCH_EMAIL_SUCCESS,
    FETCH_GOOGLE_FAILURE, FETCH_GOOGLE_REQUEST, FETCH_GOOGLE_SUCCESS,
    FETCH_GITHUB_FAILURE, FETCH_GITHUB_REQUEST, FETCH_GITHUB_SUCCESS,
} from "../constans/loginConstans";


const initialState = {
    loginEmail: null,
    loginGoogle: null,
    loginGithub: null
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EMAIL_REQUEST: return {...state, loginEmail: 'запрос'}
        case FETCH_EMAIL_SUCCESS: return {...state, loginEmail: 'успешно'}
        case FETCH_EMAIL_FAILURE: return {...state, loginEmail: action.error}

        case FETCH_GOOGLE_REQUEST: return {...state, loginGoogle: 'запрос'}
        case FETCH_GOOGLE_SUCCESS: return {...state, loginGoogle: 'успешно'}
        case FETCH_GOOGLE_FAILURE: return {...state, loginGoogle: action.error}

        case FETCH_GITHUB_REQUEST: return {...state, loginGithub: 'запрос'}
        case FETCH_GITHUB_SUCCESS: return {...state, loginGithub: 'успешно'}
        case FETCH_GITHUB_FAILURE: return {...state, loginGithub: action.error}
        default:
            return state
    }
}




export default loginReducer