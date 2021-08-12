import style from "./Login.module.css";
import TitleAuth from "../utils/TitleAuth";
import {FormLogin} from "../utils/Forms";


const Login = () => {
    return (
        <div className={style.login}>
            <TitleAuth title='Авторизация'/>
            <div className={style.form}>
                <FormLogin/>
            </div>
        </div>
    )
}
export default Login