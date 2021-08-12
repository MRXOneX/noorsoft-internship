export const FETCH_EMAIL_REQUEST = 'FETCH_EMAIL_REQUEST'
const FETCH_EMAIL_SUCCESS = 'FETCH_EMAIL_SUCCESS'
const FETCH_EMAIL_FAILURE = 'FETCH_EMAIL_FAILURE'




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
export const loginEmailActions = {
    setEmailRequest: (email, password) => ({type: FETCH_EMAIL_REQUEST, email ,password}),
    setEmailSuccess: () => ({type: FETCH_EMAIL_SUCCESS}),
    setEmailFailure: (error) => ({type: FETCH_EMAIL_FAILURE, error})
}





export default loginReducer