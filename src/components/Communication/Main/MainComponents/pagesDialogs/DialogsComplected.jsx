import { useDataDialogsComplected } from "../../../../../redux/selectors";
import Dialog from "../Dialog/Dialog";

import styles from "../../Main.module.css";

const DialogsComplected = () => {
  const dataComplected = useDataDialogsComplected();

  return (
    <div className={styles.dialogs}>
      {dataComplected &&
        dataComplected.map((item, index) => (
          <Dialog key={`${item.name}_${index}`} name={item.name} />
        ))}
    </div>
  );
};
export default DialogsComplected;
