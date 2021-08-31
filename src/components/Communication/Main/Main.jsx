import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Title from "../../utils/Title";
import { Link } from "react-router-dom";

import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Title title="WEHELP" showHr={false} size={28} />
        <button className={styles.headerBtn}>
          <FontAwesomeIcon icon={["fas", "ellipsis-v"]} />
        </button>
      </div>
      <div className={styles.navbar}>
        <Link to="/getStart">
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            icon={["fas", "history"]}
          />
        </Link>
        <Link to="/active">
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            icon={["fas", "user-clock"]}
          />
        </Link>
        <Link to="/saved">
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            icon={["fas", "book-reader"]}
          />
        </Link>
        <Link to="/complected">
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            icon={["fas", "user-friends"]}
          />
        </Link>
      </div>
    </div>
  );
};
export default Main;
