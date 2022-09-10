import React from "react";
import LowerFooter from "./LowerFooter";
import MiddleFooter from "./MiddleFooter";
import TopFooter from "./TopFooter";

function Footer(props) {
  return (
    <div className="footer">
      <TopFooter />
      <MiddleFooter />
      <LowerFooter />
    </div>
  );
}

export default Footer;
