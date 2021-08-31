import { Redirect, Route } from "react-router-dom";

import Main from "./Main/Main";

import "./Communication.css";

const Communication = ({ user }) => {
  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="wrapper">
      <Route path="/" render={() => <Main />} />
    </div>
  );
};
export default Communication;
