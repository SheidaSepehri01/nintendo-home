import React, { useState} from "react";
import "./slider.css";
export const Slider = () => {
  const [src, setSrc] = useState(require("../../images/hero.png"));
 
  return (
    <div className="slider">
      <div className="full-img">
        <img className="big-img" src={src} alt="stardev vally" />
      </div>
      <div className="thumb" onClick={(e) => setSrc(`${e.target.src}`)}>
        {imgSrc.map((link) =>{ 
        return(
          <img
          key={imgSrc.indexOf(link)}
            src={`${link}`}
            alt="stardew vally image"
          />
        )})}
      </div>
    </div>
  );
};

const imgSrc = [
  require("../../images/hero.png"),
  require("../../images/screenshot01.avif"),
  require("../../images/screenshot02.avif"),
  require("../../images/screenshot03.avif"),
  require("../../images/screenshot04.avif"),
  require("../../images/screenshot05.avif"),
  require("../../images/screenshot06.avif"),
];
