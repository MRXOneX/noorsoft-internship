import {
    FETCH_EMAIL_FAILURE, FETCH_EMAIL_REQUEST, FETCH_EMAIL_SUCCESS,
    FETCH_GOOGLE_FAILURE, FETCH_GOOGLE_REQUEST, FETCH_GOOGLE_SUCCESS,
    FETCH_GITHUB_FAILURE, FETCH_GITHUB_REQUEST, FETCH_GITHUB_SUCCESS,
} from "../constans/loginConstans";

export const loginEmailActions = {
    setEmailRequest: (email, password) => ({type: FETCH_EMAIL_REQUEST, email ,password}),
    setEmailSuccess: () => ({type: FETCH_EMAIL_SUCCESS}),
    setEmailFailure: (error) => ({type: FETCH_EMAIL_FAILURE, error})
}

export const loginGoogleActions = {
    setGoogleRequest: () => ({type: FETCH_GOOGLE_REQUEST}),
    setGoogleSuccess: () => ({type: FETCH_GOOGLE_SUCCESS}),
    setGoogleFailure: (error) => ({type: FETCH_GOOGLE_FAILURE, error})
}
export const loginGithubActions = {
    setGithubRequest: () => ({type: FETCH_GITHUB_REQUEST}),
    setGithubSuccess: () => ({type: FETCH_GITHUB_SUCCESS}),
    setGithubFailure: (error) => ({type: FETCH_GITHUB_FAILURE, error})
}