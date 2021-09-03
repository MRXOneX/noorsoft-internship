import styles from "../../../Messages.module.css";

const Text = ({ text }) => {
  return (
    <div className={styles.text}>
      <span>NAME</span>
      <p className={styles.textUser}>{text}</p>
    </div>
  );
};
export default Text;
