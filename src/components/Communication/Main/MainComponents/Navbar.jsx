import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "../Main.module.css";

const Navbar = () => {
  return (
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
  );
};
export default Navbar;
