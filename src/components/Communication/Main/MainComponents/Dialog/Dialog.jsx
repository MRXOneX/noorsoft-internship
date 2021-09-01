import PhotoUser from "./DialogComponents/PhotoUser";
import NameUser from "./DialogComponents/NameUser";
import CountMessages from "./DialogComponents/CountMessages";

import styles from "./Dialog.module.css";

const MainDialog = () => {
  return (
    <div className={styles.dialog}>
      <PhotoUser />
      <NameUser />
      <CountMessages />
    </div>
  );
};
export default MainDialog;
