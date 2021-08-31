import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Input } from "reactstrap";

import { updatePasswordActions } from "../../../../redux/actions/authorizationActions/updatePassword";

const FormUpdate = ({ code }) => {
  const dispatch = useDispatch();
  const formikUpdate = useFormik({
    initialValues: {
      newPassword: "",
    },
    validateUpdatePassword: yup.object({
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
export default FormUpdate;
