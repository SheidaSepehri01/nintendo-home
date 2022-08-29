import React, { useState } from "react";
import { Header } from "./componentes/header/header";
import { MainBox } from "./componentes/mainBox/MainBox";
import { ToolBar } from "./componentes/Toolbar/ToolBar";
import { TMenu } from "./componentes/Toolbar/toolbar-menu";
import { Footer } from "./componentes/footer/footer";
import "./style/main.css";
import "./style/responsive/responsive.css";

function App() {
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(false);
  //از والد به فرزند
  const parentToChilde = (props) => {
    setData(props);
  };
  //جا به جایی داده از فرزند به والد
  const childToParent = (childData) => {
    setClicked(childData);
  };

  return (
    <div className="App">
      <Header />
      <MainBox />
      <ToolBar childToParent={childToParent} />
      <TMenu clicked={clicked} childToParent={childToParent} />
      <Footer />
    </div>
  );
}

export default App;
