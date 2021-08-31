import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons";

import { Button, Input } from "reactstrap";

import { useDispatch } from "react-redux";

import { useFormik } from "formik";

import * as yup from "yup";

import { forgotPasswordActions } from "../../../redux/actions/authorizationActions/forgotPasswordActions";

import { registrationActions } from "../../../redux/actions/authorizationActions/registrationActions";

import { updatePasswordActions } from "../../../redux/actions/authorizationActions/updatePassword";

import { loginEmailActions } from "../../../redux/actions/authorizationActions/loginActions";

const validateLoginAndReg = yup.object({
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
});
const validateForgot = yup.object({
  email: yup
    .string()
    .email("Неверно введен электронный адрес")
    .required("Email обязателен для ввода"),
});
library.add(fas);
export const FormLogin = () => {
  const dispatch = useDispatch();
  const formikLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateLoginAndReg,
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
      {formikLogin.touched.email && formikLogin.errors.email
        ? console.log("error: " + formikLogin.errors.email)
        : console.log("good")}
      <label htmlFor="password">Пароль</label>
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Введите свой пароль"
        onChange={formikLogin.handleChange}
        value={formikLogin.values.password}
      />
      {formikLogin.touched.password && formikLogin.errors.password
        ? console.log("error: " + formikLogin.errors.password)
        : console.log("good")}
      <Button color="primary">
        Войти <FontAwesomeIcon icon={["fas", "sign-in-alt"]} />
      </Button>
    </form>
  );
};
export const FormRegistration = () => {
  const dispatch = useDispatch();
  const formikReg = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateLoginAndReg,
    onSubmit: (values) => {
      dispatch(
        registrationActions.setRegistrationRequest(
          values.email,
          values.password
        )
      );
    },
  });

  return (
    <form onSubmit={formikReg.handleSubmit}>
      <label htmlFor="email">Email</label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Введите свой email"
        onChange={formikReg.handleChange}
        value={formikReg.values.email}
      />
      <label htmlFor="password">Пароль</label>
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Введите свой пароль"
        onChange={formikReg.handleChange}
        value={formikReg.values.password}
      />
      <Button color="primary">Зарегистрироваться</Button>
    </form>
  );
};
export const FormForgot = ({ dispatch }) => {
  const formikForgot = useFormik({
    initialValues: {
      email: "",
    },
    validateForgot,
    onSubmit: (values) => {
      dispatch(forgotPasswordActions.forgotPasswordRequest(values.email));
    },
  });

  return (
    <form onSubmit={formikForgot.handleSubmit}>
      <label htmlFor="email">Email</label>
      <br />
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="Введите свой email"
        onChange={formikForgot.handleChange}
        value={formikForgot.values.email}
      />
      <Button type="submit" color="primary">
        Восстановить
      </Button>
    </form>
  );
};
export const FormUpdate = ({ code }) => {
  const dispatch = useDispatch();
  const formikUpdate = useFormik({
    initialValues: {
      newPassword: "",
    },
    validatePassword: yup.object({
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
        updatePasswordActions.updatePasswordRequest(code, values.newPassword)
      );
    },
  });

  return (
    <form onSubmit={formikUpdate.handleSubmit}>
      <label htmlFor="email">Новый пароль</label>
      <br />
      <Input
        id="newPassword"
        name="newPassword"
        type="password"
        placeholder="Введите свой пароль"
        onChange={formikUpdate.handleChange}
        value={formikUpdate.values.newPassword}
      />
      <Button type="submit" color="primary">
        Обновить пароль
      </Button>
    </form>
  );
};
