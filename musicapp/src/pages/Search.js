import React, { useState, useEffect, useContext } from "react";
import MusicContext from "../context/MusicContext";
import { Link } from "react-router-dom";
import Player from "../components/Player";
const Search = () => {
  const { searchArtist, tracks } = useContext(MusicContext);
  const [songData, setSongData] = useState(null);

  const [term, setTerm] = useState("");
  const [query, setQuery] = useState("");
  console.log("tracks from album:", tracks);
  const handleSubmit = () => {
    console.log("handlesubmit");
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-2 leftsidebar">
          <div id="menu">
            <ul>
              <li>
                <Link to="/dashboard">
                  <i class="fa-solid fa-house"></i>Home
                </Link>
              </li>
              <li>
                <i class="fa-solid fa-magnifying-glass"></i>Search
              </li>
            </ul>
          </div>
          <div id="library">
            <ul>
              <h6>
                <i class="fa-solid fa-list"></i> &nbsp;Your Library
              </h6>
              <li>
                <i class="fa-solid fa-heart"></i>Liked Songs
              </li>
              <li>
                <i class="fa-solid fa-play"></i>Playlist
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
            <div className="col-lg-6">
              <div className="flex">
                <input
                  type="text"
                  className="input mx-2"
                  placeholder="search"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                />
                <button
                  className="btn btn-secondary rounded-pill"
                  onClick={() => searchArtist(term)}
                >
                  Search
                </button>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="justify-content-end buttons">
                <button>Install App</button>
                <button>
                  <i class="fa-solid fa-bell"></i>
                </button>
                <button>user</button>
              </div>
            </div>
          </div>

          <div className="row">
            <h5>Browse all</h5>
            {tracks.slice(0, 5).map((track) => (
              <div key={track.id} onClick={() => setSongData(track.uri)}>
                <ul>
                  <li> {track.name}</li>
                </ul>
              </div>
            ))}
          </div>
          <div className="row">
            <Player trackUri={songData} />
          </div>
        </div>
      </div>
      <div className="row player">player control</div>
    </>
  );
};

export default Search;
