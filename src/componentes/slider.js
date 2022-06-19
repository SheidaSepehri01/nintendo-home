import React, {useState,useEffect} from "react";
import "../style/slider.css";
import {pics} from "../utile/images.js";



export const Slider = () => {
  const [src,setSrc] = useState(require("../images/hero.png"));
   // pics.map((elem,index,arr)=>{elem.onClick={}})
   //const [clicked,setClicked] = useStat(false);
   const childToParent=(childData)=>{
    //setClicked(childData)
    }
  return (
    <div className="slider">
    
      <div className="full-img">
        <img className="big-img" src={src} alt="stardev vally" />
       </div>
       <div className="thumb" onClick={(e)=>setSrc(`${e.target.src}`)}>{pics}</div>
     </div>
 );

};

