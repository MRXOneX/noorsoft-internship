import MessagesHeader from "./MessagesComponents/MessagesHeader";
import MessagesBlock from "./MessagesComponents/MessagesBlock";
import MessagesWrite from "./MessagesComponents/MessagesWrite";

import styles from "./Messages.module.css";
import { useDialog } from "../../../redux/selectors";

const Messages = () => {
  const dialog = useDialog();
  return (
    <div className={styles.messages}>
      <MessagesHeader {...dialog} />
      <MessagesBlock dialog={dialog} />
      <MessagesWrite />
    </div>
  );
};
export default Messages;
