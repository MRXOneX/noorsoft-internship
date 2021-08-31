import Header from "./MainComponents/Header";
import Navbar from "./MainComponents/Navbar";

import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.navbar}>
        <Navbar />
      </div>
    </div>
  );
};
export default Main;
