import Avatar from "./MessageComponents/Avatar";
import Text from "./MessageComponents/Text";

import Time from "./MessageComponents/Time";

import styles from "../../Messages.module.css";

const Message = () => {
  return (
    <div className={styles.message}>
      <Avatar />
      <Text />
      <Time />
    </div>
  );
};
export default Message;
