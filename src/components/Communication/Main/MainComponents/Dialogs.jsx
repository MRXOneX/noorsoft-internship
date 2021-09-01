import { Route, Switch } from "react-router-dom";
import DialogsGetStart from "./pagesDialogs/DialogsGetStart";
import DialogsComplected from "./pagesDialogs/DialogsComplected";
import DialogsActive from "./pagesDialogs/DialogsActive";
import DialogsSaved from "./pagesDialogs/DialogsSaved";

const Dialogs = () => {
  return (
    <Switch>
      <Route path="/getStart" render={() => <DialogsGetStart />} />

      <Route path="/active" render={() => <DialogsActive />} />

      <Route path="/saved" render={() => <DialogsSaved />} />

      <Route path="/complected" render={() => <DialogsComplected />} />
    </Switch>
  );
};
export default Dialogs;
