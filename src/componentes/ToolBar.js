import React, { useState } from "react";
import "../style/main.css";
import { TMenu } from "./toolbar-menu";
export const ToolBar = (props) => {
  const [Clicked, setClicked] = useState(false);

  return (
    <div className="Toolbar">
      <div className="toolbar-box">
        <button
          onClick={() => {
            props.childToParent(true);
          }}
        >
          <img src={require("../images/icons/menu.svg").default} alt="menu" />
        </button>
        <div
          className={Clicked ? "show" : "hide"}
          onClick={() => {
            setClicked(false);
          }}
        >
          <TMenu/>
        </div>
        <button>
          <img src={require("../images/icons/likes.svg").default} alt="likes" />
        </button>
        <button className="search">
          <img
            src={require("../images/icons/search.svg").default}
            alt="search"
          />
        </button>
        <button>
          <img
            src={require("../images/icons/shoppingCart.svg").default}
            alt="Shopping cart"
          />
        </button>
        <button>
          <img
            src={require("../images/icons/user.svg").default}
            alt="user Acount"
          />
        </button>
      </div>
    </div>
  );
};
