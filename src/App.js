import React from "react";
import "./App.scss";
import About from "./Component/About/index";
import Porfolio from "./Component/Portfolio/index";
import Contact from "./Component/Contact";

function App() {
  return (
    <div className="App">
      <About />
      <Porfolio />
      <Contact />
    </div>
  );
}

export default App;
