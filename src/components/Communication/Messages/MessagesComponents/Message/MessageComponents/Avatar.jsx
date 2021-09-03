import Title from "../../../../../utils/Title";

import styles from "../../../Messages.module.css";

const Avatar = ({ name }) => {
  return (
    <div className={styles.avatar}>
      <Title size={30} title={name.charAt(0)} showHr={false} />
    </div>
  );
};
export default Avatar;
