import { Link } from "react-router-dom";

import {
  useDataDialogsComplected,
  useInputValueSearch,
} from "../../../../../redux/selectors";
import Dialog from "../Dialog/Dialog";

import styles from "../../Main.module.css";

const DialogsComplected = ({ onOpenMessages }) => {
  const dataComplected = useDataDialogsComplected();

  const valueSearchInput = useInputValueSearch();
  const searchData = dataComplected.filter((item) =>
    item.name.toLowerCase().includes(valueSearchInput.toLowerCase())
  );
  return (
    <div className={styles.dialogs}>
      {searchData &&
        searchData.map((item, index) => (
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
