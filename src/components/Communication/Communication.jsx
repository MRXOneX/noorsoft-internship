import { Redirect, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { mainActions } from "../../redux/actions/mainActions/mainActions";
import Messages from "./Messages/Messages";
import Main from "./Main/Main";

import "./Communication.css";

const Communication = ({ user }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mainActions.setVisiblePopup(false));
  }, []);

  if (!user) return <Redirect to="/login" />;

  return (
    <div className="wrapper">
      <Route path="/" render={() => <Main />} />
      <Route path="/:link/messages/:id" render={() => <Messages />} />
    </div>
  );
};
export default Communication;
