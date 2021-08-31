import { FormUpdate } from "../utilsAuth/FormsAuth/index";
import LinksAuth from "../utilsAuth/LinksAuth";
import Title from "../../utils/Title";

import style from "./UpdatePassword.module.css";

const UpdatePassword = () => {
  const searchString = new URLSearchParams(window.location.search);
  const code = searchString.get("oobCode");

  return (
    <div className={style.update}>
      <Title title="Обновить пароль" />
      <div className={style.form}>
        <FormUpdate code={code} />
      </div>
      <div className={style.loginAndReg}>
        <LinksAuth
          linkOne="/login"
          linkTwo="/registration"
          nameOne="Войти"
          nameTwo="Регистрация"
        />
      </div>
    </div>
  );
};
export default UpdatePassword;
