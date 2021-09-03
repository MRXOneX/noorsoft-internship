import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { useRef } from "react";

import Title from "../../../utils/Title";
import { useHandleOutSideClick } from "../../../utils/handleOutSideClick";
import { useVisiblePopupSelector } from "../../../../redux/selectors";

import styles from "../Main.module.css";
import { mainActions } from "../../../../redux/actions/mainActions/mainActions";
import { signOutActions } from "../../../../redux/actions/authorizationActions/signOutAction";

const Header = () => {
  const dispatch = useDispatch();

  const visiblePopup = useVisiblePopupSelector(null);
  const toggleVisiblePopup = () => {
    dispatch(mainActions.setVisiblePopup(!visiblePopup));
  };

  const setVisiblePopup = (value) => {
    dispatch(mainActions.setVisiblePopup(value));
  };
  const visiblePopupSideClick = useRef(null);
  useHandleOutSideClick(visiblePopupSideClick, setVisiblePopup);

  return (
    <div className={styles.header} ref={visiblePopupSideClick}>
      <Title title="WEHELP" showHr={false} size={28} />
      <button className={styles.headerBtn} onClick={toggleVisiblePopup}>
        <FontAwesomeIcon icon={["fas", "ellipsis-v"]} />
      </button>
      {visiblePopup && (
        <div className={styles.headerDropMenu}>
          <button className={styles.menuBtns}>Настройки</button>
          <button
            onClick={() => dispatch(signOutActions.signOutSRequest())}
            className={styles.menuBtns}
          >
            Выход
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
