import { useDataDialogsSaved } from "../../../../../redux/selectors";
import Dialog from "../Dialog/Dialog";

import styles from "../../Main.module.css";

const DialogsSaved = () => {
  const dataSaved = useDataDialogsSaved();

  return (
    <div className={styles.dialogs}>
      {dataSaved &&
        dataSaved.map((item, index) => (
          <Dialog key={`${item.name}_${index}`} name={item.name} />
        ))}
    </div>
  );
};
export default DialogsSaved;
