import React from 'react'
import "../style/main.css";

export const HeaderMenu = () => {
  return (
    <div className='headerMenu'>
    <button><a href='/'>Store &#62;</a></button>
    <button><a href='/'>Games &#62;</a></button>
    <button><a href='/' className='selected'>Stardew vally</a></button>
    </div>
  )
}
