import React from "react";
import "../../App.css";
import "./Gallery.css";
import Footer from "../Footer";

export default function About() {
  return (
    <>
      <div className="gallery g-image">
        <div className="pic1">
          <img alt="" src={require("../../Images/mario.jpg")} />
        </div>
        <div className="pic2">
          <img alt="" src={require("../../Images/mario8.jpg")} />
        </div>
        <div className="pic3">
          <img alt="" src={require("../../Images/mario3.jpg")} />
        </div>
        <div className="pic4">
          <img alt="" src={require("../../Images/mario2.jpg")} />
        </div>
        <div className="pic5">
          <img alt="" src={require("../../Images/mario4.jpg")} />
        </div>
        <div className="pic6">
          <img alt="" src={require("../../Images/mario5.jpg")} />
        </div>
        <div className="pic7">
          <img alt="" src={require("../../Images/mario6.jpg")} />
        </div>
        <div className="pic8">
          <img alt="" src={require("../../Images/mario9.jpg")} />
        </div>
        <div className="pic9">
          <img alt="" src={require("../../Images/mario1.jpg")} />
        </div>
      </div>
      <Footer />
    </>
  );
}
