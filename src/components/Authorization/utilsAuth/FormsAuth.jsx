import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'

import {useDispatch} from "react-redux";

import {useFormik} from "formik";

import * as yup from "yup";

import {registrationActions} from "../../../redux/actions/registrationActions";

import {loginEmailActions} from "../../../redux/actions/loginActions";

import {useLoginEmailSelector, useRegistrationSelector} from "../../../redux/selectors";



library.add(fas)
export const FormLogin = () => {
    const dispatch = useDispatch()
    const formikLogin = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            email: yup.string().email('Неверно введен электронный адрес').required('Email обязателен для ввода'),
            password: yup.string().required(),
        }),
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
            <button type="submit">Войти <FontAwesomeIcon icon={["fas", "sign-in-alt"]}/> </button>
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