import style from "../Login/Login.module.css";

const TitleAuth = ({title}) => {
    return (
        <div className={style.name}>
            <h1>{title}</h1>
            <hr/>
        </div>
    )
}
export default TitleAuth