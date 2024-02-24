import React, { useContext, useState, createContext, useEffect } from "react";
import axios from "axios";
import qs from "qs";
const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  // const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  // const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
  // const AUTH_ENDPOINT = process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT;
  // const RESPONSE_TYPE = process.env.REACT_APP_SPOTIFY_RESPONSE_TYPE;
  // console.log(CLIENT_ID);

  // useEffect(() => {
  //   setToken(token);
  // }, []);
  // console.log("what is token:", token);
  // const getToken = async () => {
  //   console.log("inside getToken");
  //   const url = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
  //   const response = await fetch(url);
  //   // const data = await response.json();

  //   console.log("token is:", await response);
  // };
  // const logout = () => {
  //   setToken("");
  //   window.localStorage.removeItem("token");
  // };

  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET_ID;
  const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
  const AUTH_ENDPOINT = process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT;
  const RESPONSE_TYPE = process.env.REACT_APP_SPOTIFY_RESPONSE_TYPE;
  const [token, setToken] = useState("");
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
  console.log("what is token:", token);
  return (
    <MusicContext.Provider value={{ token }}>{children}</MusicContext.Provider>
  );
};

export default MusicContext;
