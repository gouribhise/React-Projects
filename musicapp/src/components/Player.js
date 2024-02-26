import React, { useState, useEffect, useContext } from "react";
import MusicContext from "../context/MusicContext";
import SpotifyPlayer from "react-spotify-web-playback";
const Player = ({ trackUri }) => {
  const { token } = useContext(MusicContext);
  const [play, setPlay] = useState(false);
  useEffect(() => {
    setPlay(true);
  }, [trackUri]);
  if (!token) return null;
  return (
    <SpotifyPlayer
      token={token}
      showSaveIcon
      callback={(state) => !state.isPlaying && setPlay(false)}
      play={play}
      uris={trackUri ? trackUri : []}
      styles={{
        activeColor: "#fff",
        bgColor: "#333",
        color: "#fff",
        loaderColor: "#fff",
        sliderColor: "#1cb954",
        trackArtistColor: "#ccc",
        trackNameColor: "#fff",
        height: "55px",
      }}
    />
  );
};

export default Player;
