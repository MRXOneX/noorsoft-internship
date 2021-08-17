import style from './Registration.module.css';
import Title from "../../utils/Title";
import {FormRegistration} from "../utilsAuth/Forms";
const Registration = ({}) => {
    return (
        <div className={style.registration}>
            <Title title='Регистрация'/>
            <div className={style.form}>
                <FormRegistration />
            </div>
        </div>
    )
}
export default Registration