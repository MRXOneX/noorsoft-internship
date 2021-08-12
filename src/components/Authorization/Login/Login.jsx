import style from "./Login.module.css";
import TitleAuth from "../utils/TitleAuth";


const Login = () => {
    return (
        <div className={style.login}>
            <TitleAuth title='Авторизация'/>
        </div>
    )
}
export default Login