import { Link } from "react-router-dom";

import {
  useDataDialogsSaved,
  useInputValueSearch,
} from "../../../../../redux/selectors";
import Dialog from "../Dialog/Dialog";

import styles from "../../Main.module.css";

const DialogsSaved = ({ onOpenMessages }) => {
  const dataDialogsSaved = useDataDialogsSaved();
  const valueSearchInput = useInputValueSearch();

  const searchData = dataDialogsSaved.filter((item) =>
    item.name.toLowerCase().includes(valueSearchInput.toLowerCase())
  );
  return (
    <div className={styles.dialogs}>
      {searchData &&
        searchData.map((item, index) => (
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
