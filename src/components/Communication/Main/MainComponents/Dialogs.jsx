import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { dialogActions } from "../../../../redux/actions/messagesActions/dialogAction";
import DialogsComplected from "./pagesDialogs/DialogsComplected";
import DialogsGetStart from "./pagesDialogs/DialogsGetStart";
import DialogsActive from "./pagesDialogs/DialogsActive";
import DialogsSaved from "./pagesDialogs/DialogsSaved";

const Dialogs = () => {
  const dispatch = useDispatch();
  const onOpenMessages = (value) => {
    dispatch(dialogActions.setDialog(value));
  };

  return (
    <Switch>
      <Route path="/getStart" render={() => <DialogsGetStart />} />

      <Route
        path="/active"
        render={() => <DialogsActive onOpenMessages={onOpenMessages} />}
      />

      <Route
        path="/saved"
        render={() => <DialogsSaved onOpenMessages={onOpenMessages} />}
      />

      <Route
        path="/complected"
        render={() => <DialogsComplected onOpenMessages={onOpenMessages} />}
      />
    </Switch>
  );
};
export default Dialogs;
