import { Button, Input } from "reactstrap";

import { useDispatch } from "react-redux";

import { useFormik } from "formik";

import * as yup from "yup";

import { registrationActions } from "../../../../redux/actions/authorizationActions/registrationActions";



const FormRegistration = () => {
  const dispatch = useDispatch();
  const formikReg = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateRegistration: yup.object({
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
export default FormRegistration;
