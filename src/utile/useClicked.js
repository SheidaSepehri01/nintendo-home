import React,{useEffect ,useState} from 'react'

export const useClicked = (props) => {
   const[clicked ,setClicked]= useState(false);
 setClicked(props)
   return clicked
}
