import Avatar from "./MessageComponents/Avatar";
import Text from "./MessageComponents/Text";
import Time from "./MessageComponents/Time";

import styles from "../../Messages.module.css";



const Message = () => {
  const text = "Hello bro, how are you";
  const name = "Misha Poleshchenkov";
  const time = "вчера 12:00";
  return (
    <div className={styles.message}>
      <Avatar name={name} />
      <Text text={text} />
      <Time time={time} />
    </div>
  );
};
export default Message;
