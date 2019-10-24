import React, { Fragment, useEffect } from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";

import {getSongs} from "../assets/fakeBackend";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
function TrackList() {
  const {
    trackList,
    currentTrackName,
    playTrack,
    isPlaying
  } = useMusicPlayer();

  useEffect(() => {
    const fetchData = async() => {
      const songs = await getSongs('http://localhost:8081/songs');
      console.log(songs);
    }

    fetchData();
  }, []);

  return (
    <Fragment>
      {trackList.map((track, index) => (
        <div className="box" key={track.name}>
          <button className="button" onClick={() => playTrack(index)}>
            {currentTrackName === track.name && isPlaying ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <div className="song-title">{track.name}</div>
        </div>
      ))}
    </Fragment>
  );
}

export default TrackList;
