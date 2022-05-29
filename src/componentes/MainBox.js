import React from 'react'
import { Slider } from './slider'
import { Purchase } from './purchase'
import { GameInfo } from './gameInfo'
import "../style/main.css"
export const MainBox = () => {
  return (
    <div className='Main-box'>
   <Slider />
    <Purchase />
    <GameInfo />
    </div>
  )
}
