import React from "react";
import "./header.css";
import LowerHeader from "./LowerHeader";
import MiddleHeader from "./MiddleHeader";
import TopHeader from "./TopHeader";

function Header(props) {
  return (
    <div className="header">
      <nav className="nav__bar">
        <TopHeader />
        <MiddleHeader />
        <LowerHeader />
      </nav>
    </div>
  );
}

export default Header;
