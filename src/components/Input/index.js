import React from "react";
import "./styles.css";
import { useState } from "react";

const Input = ({name}) => {
  const [value, setValue] = useState("");
  const handleChange = (el) => {
    setValue(el.target.value);
  };

  return (
    <input
      placeholder="Escribí un item"
      name={name}
      value={value}
      onChange={handleChange}
      className='item-Input'
    />
  );
};

export default Input;
