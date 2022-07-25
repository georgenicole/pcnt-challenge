import "./styles.css";
import Card from "../Card";

function Tooltip({ options, onClick, show, optionActive }) {
  const handleActive = (el) => {
    onClick(el);
  };
  return (
    <Card className={`tooltip column ${show ? "active" : ""}`}>
      {options.map((el) => (
        <p
          className={`label-filter ${(el.name === optionActive.name
            ? "active"
            : "")}`}
          key={el.name}
          onClick={() => handleActive(el)}
        >
          {el.name}
        </p>
      ))}
    </Card>
  );
}

export default Tooltip;