import {Redirect} from "react-router-dom";

import {FormRegistration} from "../utilsAuth/FormsAuth";

import LinksAuth from "../utilsAuth/LinksAuth";

import style from './Registration.module.css';

import Title from "../../utils/Title";


const Registration = ({user}) => {
    if(user) {
        return <Redirect to='/'/>
    }
    return (
        <div className={style.registration}>
            <Title title='Регистрация'/>
            <div className={style.form}>
                <FormRegistration />
            </div>
            <div className={style.loginAndForgot}>
                <LinksAuth linkOne='/login' linkTwo='/forgot_password' nameOne='Войти' nameTwo='Забыли пароль?'/>
            </div>
        </div>
    )
}
export default Registration