const Title = ({ title, size = 32, showHr = true }) => {
  return (
    <div>
      <h1 style={{ fontSize: `${size}px` }}>{title}</h1>
      {showHr ? <hr style={{ margin: "0 20% 0 20%", width: "60%" }} /> : null}
    </div>
  );
};
export default Title;
