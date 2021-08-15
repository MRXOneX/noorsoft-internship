import style from "./Login.module.css";
import Title from "../../utils/Title";
import {FormLogin} from "../utilsAuth/Forms";


const Login = () => {
    return (
        <div className={style.login}>
            <Title title='Авторизация'/>
            <div className={style.form}>
                <FormLogin/>
            </div>
        </div>
    )
}
export default Login