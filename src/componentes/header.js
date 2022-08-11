import React from "react";
import "../style/main.css";
export const Header = () => {
  return (
    <>
      <div className="header">
        <a className="h-icon" href="/">
          <img src={require("../images/icons/nintendo.svg").default} />
        </a>
        <a className="h-storeIcon" href="/">
          <img src={require("../images/icons/myNintendoStore.svg").default} />
        </a>
      </div>
      <div className="bgscreenHeader">
        <div className="headerUtils">
          <div className="homeandsearch">
            <a className="h-icon" href="/">
              <img src={require("../images/icons/nintendo.svg").default} />
            </a>
            <div className="searchBar">
              <input
                type={"search"}
                placeholder={"search something here..."}
              ></input>
            </div>
          </div>
          <div className="header-buttons">
            <button>Support</button>
            <button>
              <img src={require("../images/icons/likes.svg").default} />
              Wish List
            </button>
            <button>Cart</button>
            <button>
              <img src={require("../images/icons/user.svg").default} />
              Log in/Sign Up
            </button>
          </div>
        </div>
        <ul className="header-menu">
          <li>My Nintendo Store</li>
          <li>Games</li>
          <li>Nintendo Switch</li>
          <li>Eventes</li>
          <li>Play Nintendo</li>
        </ul>
      </div>
    </>
  );
};
