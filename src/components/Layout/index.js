import React from "react";
import Header from "../Header";
import "./styles.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
