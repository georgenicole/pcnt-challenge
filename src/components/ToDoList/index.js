import React from "react";
import Item from "../Item";
import iconPlusButton from "../../assets/icons/icon-plus-button.svg";
import "./styles.css";

const ToDoList = ({ data }) => {
  return (
    <div className="Container-ToDoList">
      <p className="title-ToDoList ">To do List</p>
      <input
        type="image"
        id="image"
        alt="btnplus"
        src={iconPlusButton}
        className="btn-plus"
      ></input>
      <ul className="list">
        {data.map((value) => (
          <Item
            checked={value.checked}
            onChange={() => {}}
            title={value.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
