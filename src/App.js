import React,{useState} from "react";
import { Header } from "./componentes/header";
import { MainBox } from "./componentes/MainBox";
import { ToolBar } from "./componentes/ToolBar";
import {TMenu} from './componentes/toolbar-menu'
import './style/main.css'
function App() {
  const [clicked, setClicked]=useState(false);
  const [data, setData]=useState(false);
//از والد به فرزند
const parentToChilde=(props)=>{
setData(props)
}
//جا به جایی داده از فرزند به والد
const childToParent=(childData)=>{
setClicked(childData)
}  

return (
    <div className="App">
      <Header />
      <MainBox />
      <ToolBar childToParent={childToParent}/>
      <TMenu clicked={clicked} childToParent={childToParent}/>
    </div>
  );
}

export default App;
