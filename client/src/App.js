import React, { useState } from "react";
import logo from "./logo.svg";
import ReactAudioPlayer from "react-audio-player";
import "./App.css";
const axios = require("axios");

function App() {
  const [songData, setSongData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  function searchSpotifyTracks(songName) {
    const data = axios
      .get(`http://localhost:5000/api/song_search/${songName}`)
      .then((res) => {
        console.log("Successfully found songs");
        setSongData(res);
      })
      .catch((err) => console.log(err));
    return data;
  }

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  function handleKeypress(e) {
    if (e.key === "Enter") {
      handleClick(e);
      setSearchInput("");
    }
  }

  async function handleClick(e) {
    e.preventDefault();
    await searchSpotifyTracks(searchInput);
    setIsSearched(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        {isSearched ? (
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={songData.data[0].albumLink}
            >
              <img
                src={songData.data[0].albumArt.mediumAlbumArt.url}
                className="album-art"
                alt="album-art"
              />
            </a>
            <div>
              <h2>{songData.data[0].trackName}</h2>
              <h4>{songData.data[0].artistName}</h4>
              <ReactAudioPlayer
                src={songData.data[0].previewUrl}
                className="audio-player"
                autoPlay
                controls
              />
            </div>
          </div>
        ) : (
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>See if your favorite song can win the battle of taste!</p>
          </div>
        )}

        <div className="song-search">
          <input
            type="text"
            id="header-search"
            placeholder="Search for your favorite song..."
            value={searchInput}
            onChange={handleChange}
            onKeyPress={handleKeypress}
          />
          <button onClick={handleClick}>Search</button>
        </div>

        {isSearched ? (
          <div>
            <ul>
              <h3>Other suggestions: </h3>
              {songData.data.slice(1, 10).map((items) => {
                return (
                  <div>
                    <div className="song-list">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={items.albumLink}
                      >
                        <img
                          src={items.albumArt.smallAlbumArt.url}
                          className="album-art"
                          alt="album-art"
                        />
                      </a>
                      <div>
                        <h5>{items.trackName}</h5>
                        <h5>{items.artistName}</h5>
                        <ReactAudioPlayer
                          src={items.previewUrl}
                          className="audio-player"
                          controls
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        ) : null}
      </header>
    </div>
  );
}

export default App;
