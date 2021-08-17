import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {library} from '@fortawesome/fontawesome-svg-core'

import {fas} from '@fortawesome/free-solid-svg-icons'

import {useDispatch} from "react-redux";

import {useFormik} from "formik";

import * as yup from "yup";

import {forgotPasswordActions} from "../../../redux/actions/forgotPasswordActions";

import {registrationActions} from "../../../redux/actions/registrationActions";

import {loginEmailActions} from "../../../redux/actions/loginActions";

const validateLoginAndReg = yup.object({
    email: yup.string()
        .email('Неверно введен электронный адрес')
        .required('Email обязателен для ввода'),
    password: yup.string()
        .required()
        .matches(
            "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
            "Пароль должен содержать цифру, буквы в нижнем и верхнем регистре и иметь длину не менее 8 знаков"
        ),
})
const validateForgot = yup.object({
    email: yup.string()
        .email('Неверно введен электронный адрес')
        .required('Email обязателен для ввода'),
})
library.add(fas)
export const FormLogin = () => {
    const dispatch = useDispatch()
    const formikLogin = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validateLoginAndReg,
        onSubmit: values => {
            dispatch(loginEmailActions.setEmailRequest(values.email, values.password))
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
            {formikLogin.touched.email && formikLogin.errors.email ? console.log('error: ' + formikLogin.errors.email) : console.log('good')}
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
            {formikLogin.touched.password && formikLogin.errors.password ? console.log('error: ' + formikLogin.errors.password) : console.log('good')}
            <br/>
            <button type="submit">Войти <FontAwesomeIcon icon={["fas", "sign-in-alt"]}/></button>
        </form>
    )
}
export const FormRegistration = () => {
    const dispatch = useDispatch()
    const formikReg = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validateLoginAndReg,
        onSubmit: values => {
            dispatch(registrationActions.setRegistrationRequest(values.email, values.password))
        },
    });
    return (
        <form onSubmit={formikReg.handleSubmit}>
            <label htmlFor="email">Email</label><br/>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formikReg.handleChange}
                value={formikReg.values.email}
            />
            <br/>
            <label htmlFor="password">Пароль</label>
            <br/>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formikReg.handleChange}
                value={formikReg.values.password}
            />
            <br/>
            <button type="submit">Зарегистрироваться</button>
        </form>
    )
}
export const FormForgot = ({dispatch}) => {
    const formikForgot = useFormik({
        initialValues: {
            email: ''
        },
        validateForgot,
        onSubmit: values => {
            dispatch(forgotPasswordActions.forgotPasswordRequest(values.email))
        },
    });
    return (
        <form onSubmit={formikForgot.handleSubmit}>
            <label htmlFor="email">Email</label><br/>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formikForgot.handleChange}
                value={formikForgot.values.email}
            />
            <button type="submit">Восстановить</button>

        </form>
    )
}