import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

import { loginEmailActions } from "../../../../redux/actions/authorizationActions/loginActions";

const FormLogin = () => {
  const dispatch = useDispatch();
  const formikLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateLogin: yup.object({
      email: yup
        .string()
        .email("Неверно введен электронный адрес")
        .required("Email обязателен для ввода"),
      password: yup
        .string()
        .required()
        .matches(
          "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
          "Пароль должен содержать цифру, буквы в нижнем и верхнем регистре и иметь длину не менее 8 знаков"
        ),
    }),
    onSubmit: (values) => {
      dispatch(
        loginEmailActions.setEmailRequest(values.email, values.password)
      );
    },
  });

  return (
    <form onSubmit={formikLogin.handleSubmit}>
      <label htmlFor="email">Email</label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Введите свой email"
        onChange={formikLogin.handleChange}
        value={formikLogin.values.email}
      />

      <label htmlFor="password">Пароль</label>
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Введите свой пароль"
        onChange={formikLogin.handleChange}
        value={formikLogin.values.password}
      />

      <Button type="submit" color="primary">
        Войти <FontAwesomeIcon icon={["fas", "sign-in-alt"]} />
      </Button>
    </form>
  );
};
export default FormLogin;
