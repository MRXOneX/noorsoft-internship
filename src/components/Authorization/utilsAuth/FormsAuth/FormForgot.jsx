import { Button, Input } from "reactstrap";

import { useDispatch } from "react-redux";

import { useFormik } from "formik";

import * as yup from "yup";

import { forgotPasswordActions } from "../../../../redux/actions/authorizationActions/forgotPasswordActions";



const FormForgot = () => {
  const dispatch = useDispatch();
  const formikForgot = useFormik({
    initialValues: {
      email: "",
    },
    validateForgotPassword: yup.object({
      email: yup
        .string()
        .email("Неверно введен электронный адрес")
        .required("Email обязателен для ввода"),
    }),
    onSubmit: (values) => {
      dispatch(forgotPasswordActions.forgotPasswordRequest(values.email));
    },
  });

  return (
    <form onSubmit={formikForgot.handleSubmit}>
      <label htmlFor="email">Email</label>
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
export default FormForgot;
