import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { dialogsActions } from "../../../redux/actions/mainActions/dialogsActions";

import Dialogs from "./MainComponents/Dialogs";
import Search from "./MainComponents/Search";
import Header from "./MainComponents/Header";
import Navbar from "./MainComponents/Navbar";

import styles from "./Main.module.css";



const Main = () => {
  const dispatch = useDispatch();
  const location = window.location.pathname;
  useEffect(() => {
    dispatch(dialogsActions.dialogsRequest());
  }, []);

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
