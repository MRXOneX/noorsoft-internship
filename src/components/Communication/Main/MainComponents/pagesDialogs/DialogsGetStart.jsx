import { useDispatch } from "react-redux";

import { useInputValueSearchSelector } from "../../../../../redux/selectors/mainSelectors";
import { useDataDialogsGetStartSelector } from "../../../../../redux/selectors/dialogsSelectors";

import Dialog from "../Dialog/Dialog";

import { dialogActions } from "../../../../../redux/actions/messagesActions/dialogAction";
import { dialogsActions } from "../../../../../redux/actions/mainActions/dialogsActions";

import history from "../../../../../history";

import styles from "../../Main.module.css";

const DialogsGetStart = () => {
  const dataDialogsGetStart = useDataDialogsGetStartSelector();
  const valueSearchInput = useInputValueSearchSelector();

  const dispatch = useDispatch();
  const onClickDialogInActive = (obj) => {
    dispatch(dialogsActions.setDialogInActive(obj));
    dispatch(dialogActions.setDialog(obj));
    history.push(`/active/messages/${obj.id}`);
  };

  const searchData = dataDialogsGetStart.filter((item) =>
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
