import { Link } from "react-router-dom";

import {
  useDataDialogsActiveSelector,
  useInputValueSearchSelector,
} from "../../../../../redux/selectors";
import Dialog from "../Dialog/Dialog";

import styles from "../../Main.module.css";

const DialogsActive = ({ onOpenMessages }) => {
  const dataDialogsActive = useDataDialogsActiveSelector();
  const valueSearchInput = useInputValueSearchSelector();

  const searchData = dataDialogsActive.filter((item) =>
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
