import { useDataDialogsGetStart } from "../../../../../redux/selectors";
import Dialog from "../Dialog/Dialog";

import styles from "../../Main.module.css";

const DialogsGetStart = () => {
  const dataGetStart = useDataDialogsGetStart();

  return (
    <div className={styles.dialogs}>
      {dataGetStart &&
        dataGetStart.map((item, index) => (
          <Dialog key={`${item.name}_${index}`} name={item.name} />
        ))}
    </div>
  );
};
export default DialogsGetStart;
