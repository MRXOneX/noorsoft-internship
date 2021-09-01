import PhotoUser from "./DialogComponents/PhotoUser";
import NameUser from "./DialogComponents/NameUser";
import CountMessages from "./DialogComponents/CountMessages";

import styles from "./Dialog.module.css";

const Dialog = ({ name }) => {
  return (
    <div className={styles.dialog}>
      <PhotoUser name={name} />
      <NameUser name={name} />
      <CountMessages />
    </div>
  );
};
export default Dialog;
