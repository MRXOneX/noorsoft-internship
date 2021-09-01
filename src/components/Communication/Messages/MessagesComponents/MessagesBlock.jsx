import Message from "./Message/Message";

import styles from "../Messages.module.css";

const MessagesBlock = () => {
  return (
    <div className={styles.messagesBlock}>
      <Message />
    </div>
  );
};
export default MessagesBlock;
