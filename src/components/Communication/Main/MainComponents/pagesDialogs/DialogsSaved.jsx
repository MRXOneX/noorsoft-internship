import { Link } from "react-router-dom";

import { useInputValueSearchSelector } from "../../../../../redux/selectors/mainSelectors";
import { useDataDialogsSavedSelector } from "../../../../../redux/selectors/dialogsSelectors";

import Dialog from "../Dialog/Dialog";

import styles from "../../Main.module.css";

const DialogsSaved = ({ onOpenMessages }) => {
  const dataDialogsSaved = useDataDialogsSavedSelector();
  const valueSearchInput = useInputValueSearchSelector();

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
