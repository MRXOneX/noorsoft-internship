import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'

import {Redirect} from "react-router-dom";

import {useDispatch} from "react-redux";

import {loginGithubActions, loginGoogleActions} from "../../../redux/actions/loginActions";

import {FormLogin} from "../utilsAuth/FormsAuth";

import LinksAuth from "../utilsAuth/LinksAuth";

import style from "./Login.module.css";

import Title from "../../utils/Title";



library.add(fab)
const Login = ({user}) => {
    const dispatch = useDispatch()
    if(user) {
        return <Redirect to='/'/>
    }
    const loginGoogle = async() => {
        dispatch(loginGoogleActions.setGoogleRequest())
    }
    const loginGithub = async() => {
        dispatch(loginGithubActions.setGithubRequest())
    }
    return (
        <div className={style.login}>
            <Title title='Авторизация'/>
            <div className={style.form}>
                <FormLogin/>
            </div>
            <div className={style.loginThrough}>
                <div>
                    <button onClick={loginGithub}><span><p><FontAwesomeIcon icon={["fab", "github"]} size='2x'/></p>Войти через GitHub</span></button>
                </div>
                <div>
                    <button onClick={loginGoogle}><span><p><FontAwesomeIcon icon={["fab", "google"]} size='2x'/></p>Войти через Google</span></button>
                </div>
            </div>
            <div className={style.regAndForgot}>
                <LinksAuth linkOne='/registration' linkTwo='/forgot' nameOne='Регистрация' nameTwo='Забыли пароль?'/>
            </div>
        </div>
    )
}
export default Login