import {useFormik} from "formik";
import firebase from 'firebase'
export const FormLogin = () => {
    const validateLogin = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Email должен быть введен';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Неверное введен адрес электронной почты';
        }
        if (!values.password) {
            errors.password = 'Пароль должен быть введен';
        }

        return errors;
    };
    const formikLogin = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validateLogin,
        onSubmit: values => {
            firebase.auth().signInWithEmailAndPassword(values.email, values.password).then()
        },
    });
    return (
        <form onSubmit={formikLogin.handleSubmit}>
            <label htmlFor="email">Email</label><br/>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formikLogin.handleChange}
                value={formikLogin.values.email}
            />
            <br/>
            <label htmlFor="password">Пароль</label>
            <br/>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formikLogin.handleChange}
                value={formikLogin.values.password}
            />
            <br/>
            <button type="submit">Войти <i className="fas fa-sign-in-alt"/></button>
        </form>
    )
}