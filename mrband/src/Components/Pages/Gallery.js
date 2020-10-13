import React from "react";
import "../../App.css";
import "./Gallery.css";

export default function About() {
  return (
    <div className="gallery g-image">
      <img alt="" src={require("../../Images/mario.jpg")} />
      <img alt="" src={require("../../Images/mario1.jpg")} />
      <img alt="" src={require("../../Images/mario2.jpg")} />

      <img alt="" src={require("../../Images/mario3.jpg")} />
      <img alt="" src={require("../../Images/mario4.jpg")} />
      <img alt="" src={require("../../Images/mario5.jpg")} />

      <img alt="" src={require("../../Images/mario6.jpg")} />
      <img alt="" src={require("../../Images/mario7.jpg")} />
      <img alt="" src={require("../../Images/mario8.jpg")} />
    </div>
  );
}
