import React from "react";
import { GlobalStyles } from "./components/shared/Global";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="container-app">
        <Nav />
        <Hero />
        <About />
      </div>
    </>
  );
}

export default App;
