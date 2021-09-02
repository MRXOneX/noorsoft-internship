import { useDispatch } from "react-redux";

import { dialogsActions } from "../../../../redux/actions/mainActions/dialogsActions";
import history from "../../../../history";
import Title from "../../../utils/Title";

import styles from "../Messages.module.css";

const MessagesHeader = ({ name, id, status }) => {
  const location = window.location.pathname;

  const dispatch = useDispatch();
  const onClickDialogInSaved = (obj) => {
    dispatch(dialogsActions.setDialogInSaved(obj));
    history.push(`/saved/messages/${obj.id}`);
  };
  const onClickDialogInActive = (obj) => {
    dispatch(dialogsActions.setDialogInActive(obj));
    history.push(`/active/messages/${obj.id}`);
  };

  return (
    <div className={styles.header}>
      <div>
        <Title title={name} showHr={false} size={28} />
      </div>
      <div>
        {location === `/saved/messages/${id}` && (
          <button
            onClick={() => onClickDialogInActive({ id, name, status })}
            className={`${styles.btnHeader} ${styles.btnHeaderRemove}`}
          >
            Удалить из сохраненных
          </button>
        )}
        {location === `/active/messages/${id}` && (
          <button
            onClick={() => onClickDialogInSaved({ id, name, status })}
            className={`${styles.btnHeader} ${styles.btnHeaderSaved}`}
          >
            Сохранить диалог
          </button>
        )}
      </div>
    </div>
  );
};
export default MessagesHeader;
