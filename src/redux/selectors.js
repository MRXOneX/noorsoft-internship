import {useSelector} from "react-redux";

export const useLoginEmailSelector = () => useSelector((state) => state.login.loginEmail)
