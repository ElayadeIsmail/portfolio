import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import SkillsTools from "./components/skill-tools/SkillsTools";
import Contact from "./components/contact/Contact";
import Work from "./components/work/Work";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <SkillsTools />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
