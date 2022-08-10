import React from "react";
import '../style/main.css'
export const Footer = () => {
  return (
    <div className="footer">
    
      <button type="nintendo" className="homeBtn">
        <img src={require("../images/icons/nintendo.svg").default} alt="nintendo"/>
      </button>
      <ul className="contact">
        <li>
          <img src={require("../images/icons/facebook.svg").default} alt="facebook"/>
        </li>
        <li>
          <img src={require("../images/icons/instagram.svg").default} alt="instagram"/>
        </li>
        <li>
          <img src={require("../images/icons/twitter.svg").default} alt="twitter"/>
        </li>
        <li>
          <img src={require("../images/icons/youtube.svg").default} alt="youtube" />
        </li>
      </ul>
    </div>
  );
};
