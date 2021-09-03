import { Link } from "react-router-dom";



const LinksAuth = ({ linkOne, linkTwo, nameOne, nameTwo }) => {
  return (
    <>
      <span>
        <Link to={linkOne}>{nameOne}</Link>
      </span>
      <span>
        <Link to={linkTwo}>{nameTwo}</Link>
      </span>
    </>
  );
};
export default LinksAuth;
