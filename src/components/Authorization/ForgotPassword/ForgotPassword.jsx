import { Redirect } from "react-router-dom";

import LinksAuth from "../utilsAuth/LinksAuth";

import Title from "../../utils/Title";

import { FormForgot } from "../utilsAuth/FormsAuth/index";

import style from "./ForgotPassword.module.css";

const ForgotPassword = ({ user }) => {
  if (user) return <Redirect to="/" />;

  return (
    <div className={style.forgotPassword}>
      <Title title="Забыли пароль" />
      <div className={style.form}>
        <FormForgot />
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
