import {useSelector} from "react-redux";

export const useLoginEmailSelector = () => useSelector(({login}) => login.loginEmail)
export const useRegistrationSelector = () => useSelector(({registration}) => registration.registration)
