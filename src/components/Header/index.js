import "./styles.css";
import {ReactComponent as Logo} from "../../assets/icons/pcnt-logo.svg";
import React from "react";

const Header = () => {
  return (
    <nav>
      <Logo />
    </nav>
  );
};

export default Header;
