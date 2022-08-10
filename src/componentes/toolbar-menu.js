import React, {useState}from 'react'
import "../style/ToolBar.css"

export const TMenu = (props) => {
 // const [clicked ,setClicked]=useState(false)
 console.log(props.clicked)
  return (
    <div className={props.clicked ? 'show tmenu ': 'hide' } >
    <div className='tmenu-back'>
    <div className='m-box'>
    <button className='close-btn' onClick={()=>{props.childToParent(false)}}>X</button>
        <h5>Menu</h5>
        
        <button>My Nintendo Store</button>
        <button>Games</button>
        <button>Nintendo Switch</button>
        <button>News Events</button>
        <button>Play Nintendo</button>
        </div>
    </div>
    </div>
 
  )
}
