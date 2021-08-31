import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Title from "../../../utils/Title";

import styles from "../Main.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Title title="WEHELP" showHr={false} size={28} />
      <button className={styles.headerBtn}>
        <FontAwesomeIcon icon={["fas", "ellipsis-v"]} />
      </button>
    </div>
  );
};
export default Header;
