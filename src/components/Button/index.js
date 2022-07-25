import React from "react";
import "./styles.css";

const Button = ({disable, className, onClick, title, tenant="primary"}) => {
  return (
    <button className={`btn ${tenant} ${className & className}`} disabled={disable} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
