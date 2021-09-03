import Title from "../../../../../utils/Title";

import styles from "../Dialog.module.css";



const PhotoUser = ({ name }) => {
  return (
    <div className={styles.iconUser}>
      <Title title={name.charAt(0)} size={30} showHr={false} />
    </div>
  );
};
export default PhotoUser;
