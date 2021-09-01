import { useDataDialogsGetStart } from "../../../../../redux/selectors";
import Dialog from "../Dialog/Dialog";

import { useDispatch } from "react-redux";
import { dialogsActions } from "../../../../../redux/actions/mainActions/dialogsActions";
import history from "../../../../../history";

import styles from "../../Main.module.css";
import { dialogActions } from "../../../../../redux/actions/messagesActions/dialogAction";

const DialogsGetStart = () => {
  const dataGetStart = useDataDialogsGetStart();

  const dispatch = useDispatch();
  const onClickDialogInActive = (obj) => {
    dispatch(dialogsActions.setDialogInActive(obj));
    dispatch(dialogActions.setDialog(obj));
    history.push(`/active/messages/${obj.id}`);
  };

  return (
    <div className={styles.dialogs}>
      {dataGetStart &&
        dataGetStart.map((item, index) => (
          <div
            key={`${item.name}_${index}`}
            onClick={() => onClickDialogInActive(item)}
          >
            <Dialog {...item} />
          </div>
        ))}
    </div>
  );
};
export default DialogsGetStart;
