import "./styles.css";
import {ReactComponent as Logo} from "../../assets/icons/pcnt-logo.svg";
import React from "react";

const Header = () => {
  return (
    <nav className="header">
      <Logo className="header__logo" />
    </nav>
  );
};

export default Header;
