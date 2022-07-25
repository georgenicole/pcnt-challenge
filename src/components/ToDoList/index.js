import Item from "../Item";
import iconPlusButton from "../../assets/icons/icon-plus-button.svg";
import spand from "../../assets/icons/spand.svg";
import Card from "../Card";
import Tooltip from "../Tooltip";
import { useEffect, useState } from "react";
import "./styles.css";
import { states } from "../../utils";


const ToDoList = ({
  data,
  options,
  optionSelected,
  onCheck,
  onFilter,
  showTooltip,
  onShowFilter,
  onNewList
}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleFilter = (option) => {
    onFilter(option);

    if (option.state === states.all) {
      setList(data);
    } else {
      const values = data.filter((el) => el.state === option.state);
      setList(values);
    }
  };
  return (
    <Card className="card-todos">
      <Tooltip
        onClick={handleFilter}
        options={options}
        show={showTooltip}
        optionActive={optionSelected}
      />
      <div className="row wrapper-title">
        <div className="row">
          <h2 className="title-todo-list">To do List</h2>
          <img
            src={iconPlusButton}
            alt="add new list todo"
            className="btn-plus"
            onClick={onNewList}
          />
        </div>
        <button className="btn-spand" onClick={onShowFilter}>
          <span>{optionSelected.name}</span>
          <img src={spand} alt="spand" />
        </button>
      </div>
      <ul className="list">
        {list.map((item) => (
          <Item key={item.id} item={item} onClick={() => onCheck(item)} />
        ))}
      </ul>
    </Card>
  );
};

export default ToDoList;