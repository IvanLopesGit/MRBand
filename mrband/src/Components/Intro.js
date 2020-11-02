import React from "react";
import ReactPlayer from "react-player";
import "./Intro.css";

function Music() {
  return (
    <>
      <div className="title">
        <div className="intro-title">Leave a Light On</div>
        <div className="intro-sub">(Official Music Video)</div>
      </div>
      <div className="intro-container">
        <ReactPlayer
          url={require("../Video/mario.mp4")}
          playing={true}
          controls={true}
          width="100%"
          height="100%"
          playIcon={true}
        />
      </div>
    </>
  );
}

export default Music;
