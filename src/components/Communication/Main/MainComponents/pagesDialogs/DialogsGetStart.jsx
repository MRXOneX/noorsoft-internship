import { useDispatch } from "react-redux";

import {
  useDataDialogsGetStart,
  useInputValueSearch,
} from "../../../../../redux/selectors";
import Dialog from "../Dialog/Dialog";
import { dialogActions } from "../../../../../redux/actions/messagesActions/dialogAction";
import { dialogsActions } from "../../../../../redux/actions/mainActions/dialogsActions";
import history from "../../../../../history";

import styles from "../../Main.module.css";

const DialogsGetStart = () => {
  const dataGetStart = useDataDialogsGetStart();

  const dispatch = useDispatch();
  const onClickDialogInActive = (obj) => {
    dispatch(dialogsActions.setDialogInActive(obj));
    dispatch(dialogActions.setDialog(obj));
    history.push(`/active/messages/${obj.id}`);
  };

  const valueSearchInput = useInputValueSearch();
  const searchData = dataGetStart.filter((item) =>
    item.name.toLowerCase().includes(valueSearchInput.toLowerCase())
  );

  return (
    <div className={styles.dialogs}>
      {searchData &&
        searchData.map((item, index) => (
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
