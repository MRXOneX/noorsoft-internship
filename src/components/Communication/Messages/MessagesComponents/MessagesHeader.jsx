import styles from "../Messages.module.css";
import Title from "../../../utils/Title";

const MessagesHeader = ({ name }) => {
  return (
    <div className={styles.header}>
      <div>
        <Title title={name} showHr={false} size={28} />
      </div>
      <div></div>
    </div>
  );
};
export default MessagesHeader;
