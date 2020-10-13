import React from "react";
import "../../App.css";
import "../../Components/Pages/Music.css";
import Footer from "../Footer";

export default function Music() {
  return (
    <>
      <div className="music">
        <div className="music-album">
          <img
            src={require("../../Images/oldstreet.jpg")}
            alt="Eletric"
            className="music-img"
          />
          <div className="music-track">
            Release Date: 18th September, 2020
            <br />
            <br /> 1. I’m Ready
            <br /> 2. Leave a Light On
            <br /> 3. Coffee
            <br /> 4. The Times You Loved Me
            <br /> 5. The Sunshine Jam
            <br /> 6. Too Late, Woman
            <br /> 7. My Guitar and Me
            <br /> 8. Hard Way
            <br /> 9. Overcast Sky
            <br /> 10. Go Down the Road
          </div>
        </div>
        <div className="music-icon">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://open.spotify.com/artist/3SvGL8B0ltyBJQvlBNbE9N?si=IEil8RrNQfqJjc5aCuxtwQ&fbclid=IwAR3qwALLcYUcEUBAU6CmrV-6xn0MnW-sHJiUYQEpQgdQjiiMEVjiDvDWPNQ"
          >
            <img
              className="spotify-icon"
              src={require("../../Images/spotify_icon.png")}
              alt="Spotify"
            />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.deezer.com/br/artist/79939172"
          >
            <img
              className="deezer-icon"
              src={require("../../Images/deezer-icon.png")}
              alt="Deezer"
            />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://music.apple.com/us/artist/mario-rossi-band/1488499566"
          >
            <img
              className="apple-icon"
              src={require("../../Images/apple-icon.png")}
              alt="Apple"
            />
          </a>
        </div>

        <div className="music-album">
          <img
            src={require("../../Images/electric.jpg")}
            alt="The Same Old Street"
            className="music-img"
          />
          <div className="music-track">
            Release Date: 1st November, 2019
            <br />
            <br /> 1. Following That Yonder Star
            <br />
            2. Breathin’, Lovin’, Livin’ Rock 'n' Roll
            <br /> 3. Disorder Part I & Part II
            <br /> 4. Morning Rain
            <br /> 5. Rearview Mirror Blues
            <br /> 6. Poetry of the Gods
            <br /> 7. Joker Rocker
            <br /> 8. Trying to do the Right Thing
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
