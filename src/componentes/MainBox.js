import React from "react";
import { Slider } from "./slider";
import { Purchase } from "./purchase";
import { GameInfo } from "./gameInfo";
import "../style/main.css";
export const MainBox = () => {
  return (
    <div className="Main-box">
     <div className="gameIntroduction">
      <div className="currentPage">
      <HeaderMenu />
      </div>
      <div className="slider-purchase">
      <Slider />
        <Purchase />
      </div>
      </div>
      <div className="gameinfo">
        <GameInfo />
      </div>
    </div>
  );
};
export const HeaderMenu = () => {
  return (
    <div className="headerMenu">
      <button>
        <a href="/">Store &#62;</a>
      </button>
      <button>
        <a href="/">Games &#62;</a>
      </button>
      <button>
        <a href="/" className="selected">
          Stardew vally
        </a>
      </button>
    </div>
  );
};
