import styles from "../../../Messages.module.css";



const Time = ({ time }) => {
  return (
    <div className={styles.time}>
      <span>{time}</span>
    </div>
  );
};
export default Time;
