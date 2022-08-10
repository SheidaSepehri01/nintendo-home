import React, { useState, useEffect } from "react";
import "../style/slider.css";
export const Slider = () => {
  const [src, setSrc] = useState(require("../images/hero.png"));
  const [imgClick, setImageClicked] = useState({});

  const childToParent = (childData) => {
    //setClicked(childData)
  };
 
  return (
    <div className="slider">
      <div className="full-img">
        <img className="big-img" src={src} alt="stardev vally" />
      </div>
      <div className="thumb" onClick={(e) => setSrc(`${e.target.src}`)}>
        {pics}
      </div>
    </div>
  );
};
const pics = [
  <img
    key={1}
    value={1}
    src={require("../images/screenshot01.avif")}
    alt="stardew vally image"
  />,
  <img
    key={2}
    value={2}
    src={require("../images/screenshot02.avif")}
    alt="stardew vally image"
  />,
  <img
    key={3}
    value={3}
    src={require("../images/screenshot03.avif")}
    alt="stardew vally image"
  />,
  <img
    key={4}
    value={4}
    src={require("../images/screenshot04.avif")}
    alt="stardew vally image"
  />,
  <img
    key={5}
    value={5}
    src={require("../images/screenshot05.avif")}
    alt="stardew vally image"
  />,
  <img
    key={6}
    value={6}
    src={require("../images/screenshot06.avif")}
    alt="stardew vally image"
  />,
  <img
    key={7}
    value={7}
    src={require("../images/hero.png")}
    alt="stardew vally image"
  />,
];
const imgSrc = [
  "../images/hero.png",
  "../images/screenshot01.avif",
  "../images/screenshot02.avif",
  "../images/screenshot03.avif",
  "../images/screenshot04.avif",
  "../images/screenshot05.avif",
  "../images/screenshot06.avif",
];
