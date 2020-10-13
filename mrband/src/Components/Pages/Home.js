import React from "react";
import "../../App.css";
import Intro from "../Intro";
import About from "../About";
import Releases from "../Releases";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Intro />
      <About />
      <Releases />
      <Footer />
    </>
  );
}

export default Home;
