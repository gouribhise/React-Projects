import React, { useContext, useState, createContext, useEffect } from "react";
import axios from "axios";
import qs from "qs";
const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET_ID;
  const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
  const AUTH_ENDPOINT = process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT;
  const RESPONSE_TYPE = process.env.REACT_APP_SPOTIFY_RESPONSE_TYPE;
  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);
  /*** */
  console.log("what is token:", token);
  const getData = async () => {
    const headers = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: CLIENT_ID,
        password: CLIENT_SECRET,
      },
    };
    const data = {
      grant_type: "client_credentials",
    };

    try {
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        qs.stringify(data),
        headers
      );
      console.log("token:", response.data.access_token);
      setToken(response.data.access_token);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  /** Search Artist and tracks */
  const searchArtist = async (searchKey) => {
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });

    var artistID = data.artists.items[0].id;

    var artistTracks = await axios.get(
      `https://api.spotify.com/v1/artists/${artistID}/top-tracks`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit: 10,
          market: "US",
        },
      }
    );

    setTracks(artistTracks.data.tracks);
  };
  console.log("tracks", tracks);
  return (
    <MusicContext.Provider value={{ token, getData, tracks, searchArtist }}>
      {children}
    </MusicContext.Provider>
  );
};

export default MusicContext;
