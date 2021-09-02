import { Link } from "react-router-dom";

import { useDataDialogsSaved } from "../../../../../redux/selectors";
import Dialog from "../Dialog/Dialog";

import styles from "../../Main.module.css";

const DialogsSaved = ({ onOpenMessages }) => {
  const dataSaved = useDataDialogsSaved();

  return (
    <div className={styles.dialogs}>
      {dataSaved &&
        dataSaved.map((item, index) => (
          <Link
            key={`${item.name}_${index}`}
            to={`/saved/messages/${item.id}`}
            onClick={() => onOpenMessages(item)}
          >
            <Dialog name={item.name} />
          </Link>
        ))}
    </div>
  );
};
export default DialogsSaved;
