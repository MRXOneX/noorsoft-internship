import { Redirect } from "react-router-dom";

import { useDispatch } from "react-redux";

import LinksAuth from "../utilsAuth/LinksAuth";

import Title from "../../utils/Title";

import { FormForgot } from "../utilsAuth/FormsAuth";

import style from "./ForgotPassword.module.css";

const ForgotPassword = ({ user }) => {
  const dispatch = useDispatch();
  if (user) return <Redirect to="/" />;

  return (
    <div className={style.forgotPassword}>
      <Title title="Забыли пароль" />
      <div className={style.form}>
        <FormForgot dispatch={dispatch} />
      </div>
      <div className={style.loginAndReg}>
        <LinksAuth
          linkOne="/login"
          linkTwo="/registration"
          nameOne="Войти"
          nameTwo="Регистрация?"
        />
      </div>
    </div>
  );
};
export default ForgotPassword;
