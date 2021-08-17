import {Redirect} from "react-router-dom";

import {FormLogin} from "../utilsAuth/FormsAuth";

import style from "./Login.module.css";

import Title from "../../utils/Title";
import LinksAuth from "../utilsAuth/LinksAuth";


const Login = ({user}) => {
    if(user) {
        return <Redirect to='/'/>
    }
    return (
        <div className={style.login}>
            <Title title='Авторизация'/>
            <div className={style.form}>
                <FormLogin/>
            </div>
            <div className={style.reg}>
                <LinksAuth linkOne='/registration' nameOne='Регистрация' />
            </div>
        </div>
    )
}
export default Login