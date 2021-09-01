import { useDataDialogsActive } from "../../../../../redux/selectors";
import Dialog from "../Dialog/Dialog";

import styles from "../../Main.module.css";

const DialogsActive = () => {
  const dataActive = useDataDialogsActive();

  return (
    <div className={styles.dialogs}>
      {dataActive &&
        dataActive.map((item, index) => (
          <Dialog key={`${item.name}_${index}`} name={item.name} />
        ))}
    </div>
  );
};
export default DialogsActive;
