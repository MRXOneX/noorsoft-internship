import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Route, Router, Switch } from "react-router-dom";
import { useEffect } from "react";

import UpdatePassword from "./components/Authorization/UpdatePassword/UpdatePassword";
import ForgotPassword from "./components/Authorization/ForgotPassword/ForgotPassword";
import Registration from "./components/Authorization/Registration/Registation";
import Login from "./components/Authorization/Login/Login";
import Communication from "./components/Communication/Communication";
import { authActions } from "./redux/actions/authorizationActions/authActions";
import { useUserSelector } from "./redux/selectors";
import history from "./history";

import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";

function App() {
  useEffect(() => {
    dispatch(authActions.setUserRequest());
  }, []);
  const dispatch = useDispatch();
  const user = useUserSelector();

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router history={history}>
        <Switch>
          <Route path="/login" render={() => <Login user={user} />} />
          <Route
            path="/registration"
            render={() => <Registration user={user} />}
          />
          <Route
            path="/forgot_password"
            render={() => <ForgotPassword user={user} />}
          />
          <Route path="/update_password" render={() => <UpdatePassword />} />
          <Route path="/" render={() => <Communication user={user} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
