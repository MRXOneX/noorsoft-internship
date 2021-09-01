import Header from "./MainComponents/Header";
import Navbar from "./MainComponents/Navbar";

import styles from "./Main.module.css";
import Search from "./MainComponents/Search";
import Dialogs from "./MainComponents/Dialogs";

const Main = () => {
  const location = window.location.pathname;

  return (
    <div className={styles.main}>
      <Header />
      {location !== "/" && <Search />}
      <Navbar />
      <Dialogs />
    </div>
  );
};
export default Main;
