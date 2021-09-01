import stylesDialog from "../Dialog.module.css";
import Title from "../../../../../utils/Title";

const PhotoUser = ({ name }) => {
  return (
    <div className={stylesDialog.iconUser}>
      <Title title={name.charAt(0)} size={30} showHr={false} />
    </div>
  );
};
export default PhotoUser;
