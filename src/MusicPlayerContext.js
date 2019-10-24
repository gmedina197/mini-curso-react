import React, { useState, useEffect } from "react";
import LostChameleon from "./assets/LostChameleon.mp3";
import Rock from "./assets/TheHipsta.mp3";
import Tobu from "./assets/Tobu.mp3";

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = props => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [],
    currentTrackIndex: null,
    isPlaying: false
  });

  useEffect(() => {
    const fetchData = async () => {
      const songsRequest = await fetch("http://localhost:8081/songs");
      const list = await songsRequest.json();

      const songs = list.map(song => {
        if (song.filename === "LostChameleon") {
          song.file = LostChameleon;
        }
        if (song.filename === "Rock") {
          song.file = Rock;
        }
        if (song.filename === "Tobu") {
          song.file = Tobu;
        }

        return song;
      });

      setState({ ...state, tracks: songs });
    };

    fetchData();
  }, []);

  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
