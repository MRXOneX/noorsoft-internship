import moment from "moment";

import Message from "./Message/Message";

import styles from "../Messages.module.css";



const MessagesBlock = () => {
  const lastActivity = moment().format("lll");
  return (
    <div className={styles.messagesBlock}>
      <Message />
      <div className={styles.lastActivity}>{lastActivity}</div>
    </div>
  );
};
export default MessagesBlock;
