import "./styles.css";

const Item = ({ title, checked, onChange }) => {

  return (
    <li className="item">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="title-span">{title}</span>
    </li>
  );
};

export default Item;
