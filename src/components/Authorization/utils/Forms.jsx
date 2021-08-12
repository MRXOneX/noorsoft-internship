import {useFormik} from "formik";
export const FormLogin = () => {
    const formikLogin = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            console.log(values)
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