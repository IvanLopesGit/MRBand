import React from "react";
import "./Intro.css";

function Music() {
  return (
    <>
      <div className="title">
        <div className="intro-title">Leave a Light On</div>
        <div className="intro-sub">(Official Music Video)</div>
      </div>
      <div className="intro-container">
        <video src={require("../Video/mario.mp4")} autoPlay loop />
      </div>
    </>
  );
}

export default Music;
