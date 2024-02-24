import React, { useState, useEffect, useContext } from "react";
import MusicContext from "../context/MusicContext";
const API_KEY = process.env.REACT_APP_SPOTIFY_CLIENT_ID;

const Dashboard = () => {
  const [songData, setSongData] = useState(null);

  return (
    <>
      <div className="row">
        <div className="col-lg-2 leftsidebar">
          <div id="menu">
            <ul>
              <li>
                <i class="fa-solid fa-house"></i>Home
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
            <div className="col-lg-3">
              <i class="fa-solid fa-chevron-left"></i>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div className="col-lg-6">
              <div className="justify-content-end buttons">
                <button>Explore premium</button>
                <button>Install App</button>
                <button>
                  <i class="fa-solid fa-bell"></i>
                </button>
                <button>user</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="badge rounded-pill bg-primary options">All</p>
            </div>
            <div className="col">
              <p className="badge rounded-pill bg-primary options">Music</p>
            </div>
            <div className="col">
              <p className="badge rounded-pill bg-primary options">Podcasts</p>
            </div>
          </div>
          <div className="row"></div>
        </div>
      </div>
      <div className="row player">player control</div>
    </>
  );
};

export default Dashboard;
