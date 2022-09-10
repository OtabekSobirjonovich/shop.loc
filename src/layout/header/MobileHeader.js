import React from "react";
import "./mobileNavbar.css";

function MobileHeader(props) {
  return (
    <div className="mobile_navbar">
      <img className="kebab_icon" src="./images/cebab_icon.png" alt="" />
      <div className="search-box">
        <input
          className="search-input"
          type="text"
          placeholder="Поиск по каталогу..."
        />
        <button className="search-btn">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <img className="call_icon" src="./images/call_icon.png" alt="" />
    </div>
  );
}

export default MobileHeader;
