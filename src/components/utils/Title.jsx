const Title = ({title, size = 32}) => {
    return (
        <div>
            <h1 style={{fontSize: `${size}px`}}>{title}</h1>
            <hr style={{margin: "0 20% 0 20%" ,width: "60%"}}/>
        </div>
    )
}
export default Title