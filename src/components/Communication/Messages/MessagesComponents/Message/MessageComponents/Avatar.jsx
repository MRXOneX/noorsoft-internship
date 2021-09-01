import Title from "../../../../../utils/Title";

const Avatar = () => {
  return (
    <div
      style={{
        borderRadius: "5px",
        background: "rgba(146, 143, 253)",
        color: "white",
        width: "40px",
        height: "40px",
        fontWeight: "550",
        textAlign: "center",
      }}
    >
      <Title size={30} title="O" showHr={false} />
    </div>
  );
};
export default Avatar;
