import React from "react";
import MobileNavbarElements from "./mobile_navbar_elements/MobileNavbarElements";
import { useState } from "react";
import "./mobileNavbar.css";

function MobileHeader(props) {
  const [showMobileNavbarElements, setShowMobileNavbarElements] =
    useState(false);
  return (
    <>
      {showMobileNavbarElements && (
        <MobileNavbarElements
          showMobileNavbarElements={showMobileNavbarElements}
          setShowMobileNavbarElements={setShowMobileNavbarElements}
        />
      )}
      {/* <MobileNavbarElements /> */}
      <div className="mobile_navbar">
        <img
          className="kebab_icon"
          src="./images/cebab_icon.png"
          alt=""
          onClick={() => setShowMobileNavbarElements(!showMobileNavbarElements)}
        />
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
    </>
  );
}

export default MobileHeader;
