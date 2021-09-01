import { Link } from "react-router-dom";

import { useDataDialogsActive } from "../../../../../redux/selectors";
import Dialog from "../Dialog/Dialog";

import styles from "../../Main.module.css";

const DialogsActive = ({ onOpenMessages }) => {
  const dataActive = useDataDialogsActive();

  return (
    <div className={styles.dialogs}>
      {dataActive &&
        dataActive.map((item, index) => (
          <Link
            to={`/active/messages/${item.id}`}
            key={`${item.name}_${index}`}
            onClick={() => onOpenMessages(item)}
          >
            <Dialog name={item.name} />
          </Link>
        ))}
    </div>
  );
};
export default DialogsActive;
