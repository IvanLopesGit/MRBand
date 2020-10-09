import React from "react";
import "../../App.css";
import Intro from "../Intro";
import About from "../About";
import Releases from "../Releases";

function Home() {
  return (
    <>
      <Intro />
      <About />
      <Releases />
    </>
  );
}

export default Home;
