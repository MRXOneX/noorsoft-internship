import { Link } from "react-router-dom";

import {
  useDataDialogsActive,
  useInputValueSearch,
} from "../../../../../redux/selectors";
import Dialog from "../Dialog/Dialog";

import styles from "../../Main.module.css";

const DialogsActive = ({ onOpenMessages }) => {
  const dataActive = useDataDialogsActive();

  const valueSearchInput = useInputValueSearch();
  const searchData = dataActive.filter((item) =>
    item.name.toLowerCase().includes(valueSearchInput.toLowerCase())
  );

  return (
    <div className={styles.dialogs}>
      {searchData &&
        searchData.map((item, index) => (
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
