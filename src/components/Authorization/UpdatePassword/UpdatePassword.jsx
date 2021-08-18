import LinksAuth from "../utilsAuth/LinksAuth";
import Title from "../../utils/Title";
import {FormUpdate} from "../utilsAuth/FormsAuth";
import style from './UpdatePassword.module.css'

const UpdatePassword = () => {
    return (
        <div className={style.update}>
            <Title title='Обновить пароль'/>
            <div className={style.form}>
                <FormUpdate />
            </div>
            <div className={style.loginAndReg}>
                <LinksAuth linkOne='/login' linkTwo='/registration' nameOne='Войти' nameTwo='Регистрация'/>
            </div>
        </div>
    )
}
export default UpdatePassword