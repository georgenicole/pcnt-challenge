import "./styles.css";
import Check from "../../assets/icons/checked.jpg";
import UnCheck from "../../assets/icons/unchecked.jpg";

const Item = ({ item, onClick }) => {
  const { checked, title } = item;
  return (
    <li className={`row item ${checked ? "checked" : ""}`} onClick={onClick}>
      <div className="row">
        <img
          src={checked ? Check : UnCheck}
          alt={`${checked ? "selected" : "non-selected"}`}
          className="img-check"
        />
        <span className="title-todo">{title}</span>
      </div>
    </li>
  );
};

export default Item;
