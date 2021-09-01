import { useDataDialogsComplected } from "../../../../../redux/selectors";
import Dialog from "../Dialog/Dialog";

import styles from "../../Main.module.css";
import { Link } from "react-router-dom";

const DialogsComplected = ({ onOpenMessages }) => {
  const dataComplected = useDataDialogsComplected();

  return (
    <div className={styles.dialogs}>
      {dataComplected &&
        dataComplected.map((item, index) => (
          <Link
            key={`${item.name}_${index}`}
            to={`/complected/messages/${item.id}`}
            onClick={() => onOpenMessages(item)}
          >
            <Dialog name={item.name} />
          </Link>
        ))}
    </div>
  );
};
export default DialogsComplected;
