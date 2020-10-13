import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img
          className="footer-img"
          src={require("../Images/logo.png")}
          alt=""
        />
      </div>
      <small className="website-rights">
        © 2020 Jokerman Music. All Rights Reserved.
      </small>
      <div className="social-icon">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.facebook.com/mariorossiband/"
        >
          <span className="fab fa-lg fa-facebook-f" aria-hidden="true"></span>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.youtube.com/channel/UCTPOgk3GZOxiN6TZ_Aa6hmQ"
        >
          <span className="fab fa-lg fa-youtube" aria-hidden="true"></span>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/mrbluesrock"
        >
          <span className="fab fa-lg fa-instagram" aria-hidden="true"></span>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://open.spotify.com/artist/3SvGL8B0ltyBJQvlBNbE9N?si=IEil8RrNQfqJjc5aCuxtwQ&fbclid=IwAR3qwALLcYUcEUBAU6CmrV-6xn0MnW-sHJiUYQEpQgdQjiiMEVjiDvDWPNQ"
        >
          <span className="fab fa-lg fa-spotify" aria-hidden="true"></span>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.deezer.com/br/artist/79939172?fbclid=IwAR3EwiFnhZ_tOaMstjd4tKDzMIbdfQCvB-0kKVUMV0qdF78l_mLXd1fGc6M"
        >
          <span className="fab fa-lg fa-deezer" aria-hidden="true"></span>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://music.apple.com/us/artist/mario-rossi-band/1488499566"
        >
          <span className="fab fa-lg fa-apple" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
