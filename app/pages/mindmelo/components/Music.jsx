"use client";
import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillInfoCircle } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

import MusicInfo from "./MusicInfo";
import { MusicData } from "../../../../Components/Data/musicData";

const Music = ({ modelActive, setModelActive }) => {
  const songs = MusicData;
  const [songsState, setSongsState] = useState(songs);
  const [volume, setVolume] = useState(50);
  const audioRefs = useRef({});
  const [modelData, setModelData] = useState([]);

  useEffect(() => {
    songs.forEach((song) => {
      audioRefs.current[song.id] = new Audio(song.audio);
    });
  }, []);

  const playPauseHandler = (id) => {
    const audio = audioRefs.current[id];
    const updatedSongs = songsState.map((song) =>
      song.id === id ? { ...song, isActive: !song.isActive } : song
    );

    setSongsState(updatedSongs);

    const songInstance = updatedSongs.filter((song) => song.id === id);
    if (audio) {
      if (updatedSongs.find((song) => song.id === id).isActive) {
        const volume = songInstance[0].volume / 100;
        audio.volume = volume;
        audio.play();
        toast(songInstance[0].notificationMsgPlayed);
      } else {
        audio.pause();
        toast(songInstance[0].notificationMsgPaused);
      }
    }
  };

  const volumeHandler = (e, id) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    const updatedSongs = songsState.map((song) =>
      song.id === id ? { ...song, volume: newVolume } : song
    );
    setSongsState(updatedSongs);

    const audio = audioRefs.current[id];
    if (audio) {
      if (updatedSongs.find((song) => song.id === id).isActive) {
        audio.volume = newVolume / 100;
      }
    }
  };
  const musicInfoHandler = (id) => {
    const updatedSongs = songsState.map((song) =>
      song.id === id ? { ...song, showModel: !modelActive } : song
    );
    setSongsState(updatedSongs);
    setModelActive(updatedSongs.some((song) => song.showModel));
    setModelData(updatedSongs.filter((song) => song.id === id));
  };

  // animations
  const backdrop = {
    hidden: { opacity: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* backdrop */}
      {modelActive && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit={"hidden"}
          className="backdrop"
        ></motion.div>
      )}
      {/* music-component */}
      <div className="music-wrapper">
        {modelActive && (
          <AnimatePresence mode="wait" exit={true}>
            <MusicInfo
              modelData={modelData}
              modelActive={modelActive}
              setModelActive={setModelActive}
            />
          </AnimatePresence>
        )}

        {songsState.map((songinfo) => (
          <div
            className={
              songinfo.isActive
                ? "music-card btn music-card-active"
                : "music-card btn"
            }
            key={songinfo.id}
          >
            {/* info button */}
            <button
              alt="music-info-btn"
              className="music-card-info-btn btn"
              onClick={() => musicInfoHandler(songinfo.id)}
            >
              <AiFillInfoCircle className="info" />
            </button>
            {/* Music Button handler */}
            <button
              alt="music-play-pause-btn"
              className="music-btn btn"
              onClick={() => playPauseHandler(songinfo.id)}
            >
              <songinfo.icon />
              <p className="music-btn-name">{songinfo.name}</p>
            </button>
            {/* Volume  */}
            <input
              type="range"
              name="volume"
              value={songinfo.volume}
              onChange={(e) => volumeHandler(e, songinfo.id)}
              id="volume"
              className="music-volume"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Music;
