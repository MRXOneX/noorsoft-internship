import Avatar from "./MessageComponents/Avatar";
import Text from "./MessageComponents/Text";

import styles from "../../Messages.module.css";
import Time from "./MessageComponents/Time";
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
