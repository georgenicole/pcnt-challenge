import "./styles.css";
import Check from "../../assets/icons/checked.jpg";
import UnCheck from "../../assets/icons/unchecked.jpg";

const Item = ({ title, checked, onChange }) => {

  

  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <img  src={checked ? Check : UnCheck}
        alt={`${checked ? "selected" : "non-selected"}`}/>
        <span className="title-span">{title}</span>

      </label>
    </li>
  );
};

export default Item;
