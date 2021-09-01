import { useDataDialogsGetStart } from "../../../../../redux/selectors";
import Dialog from "../Dialog/Dialog";

import styles from "../../Main.module.css";
import { useDispatch } from "react-redux";
import { dialogsActions } from "../../../../../redux/actions/mainActions/dialogsActions";

const DialogsGetStart = () => {
  const dataGetStart = useDataDialogsGetStart();
  console.log(dataGetStart);
  const dispatch = useDispatch();
  const onClickDialogInActive = (obj) => {
    dispatch(dialogsActions.setDialogInActive(obj));
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
