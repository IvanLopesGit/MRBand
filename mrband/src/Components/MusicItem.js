import React from "react";
import { Link } from "react-router-dom";

function MusicItem(props) {
  return (
    <>
      <li className="music-item">
        <Link className="music-item-link" to={props.path}>
          <figure className="music-item-picwrap" music-category={props.label}>
            <img src={props.src} alt="Music 1" className="music-item-img" />
          </figure>
          <div className="music-item-info">
            <h5 className="music-item-text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default MusicItem;
