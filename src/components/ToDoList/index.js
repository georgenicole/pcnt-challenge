import React from "react";
import Item from "../Item";
import "./styles.css";

const ToDoList = ({ data }) => {
  return (
    <div className="Container-ToDoList">
      <p className="title-ToDoList ">To do List</p>
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
