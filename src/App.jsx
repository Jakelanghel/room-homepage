import React from "react";
import { GlobalStyles } from "./components/shared/Global";
import Nav from "./components/nav/Nav";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Slider />
    </div>
  );
}

export default App;
