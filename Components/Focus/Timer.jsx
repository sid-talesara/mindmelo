"use client";
import React, { useEffect, useState } from "react";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { BsPauseFill, BsFillPlayFill } from "react-icons/bs";
import { BiStop } from "react-icons/bi";
import soundFile from "../../public/achievementBell.wav";

const Timer = () => {
  const [isActive, setIsActive] = useState(false); //false=pause, true=start
  const [bellActive, setBellActive] = useState(true);
  let intervalId;

  const getLocalStorageItems = () => {
    const savedMin = localStorage.getItem("min");
    const savedSec = localStorage.getItem("sec");
    if (savedMin !== null && savedSec !== null) {
      return { min: parseInt(savedMin), sec: parseInt(savedSec) };
    } else {
      return { min: 25, sec: 0 }; // Default timer values
    }
  };

  const { min: initialMin, sec: initialSec } = getLocalStorageItems();
  const [min, setMin] = useState(() => initialMin);
  const [sec, setSec] = useState(() => initialSec);
  const [timer, setTimer] = useState(initialMin);
  getLocalStorageItems();
  const startpausehandler = () => {
    setIsActive(!isActive); //switch b/w start and pause
  };

  const stopHandler = () => {
    setIsActive(false);
    setMin(timer);
    setSec(0);
  };

  useEffect(() => {
    if (isActive && (min > 0 || sec > 0)) {
      intervalId = setInterval(() => {
        if (sec > 0) {
          setSec(sec - 1);
        } else {
          if (min > 0 && sec === 0) {
            setMin(min - 1);
            setSec(59);
          }
        }
      }, 1000);
    } else if (isActive && min === 0 && sec === 0) {
      console.log("Timer completed!");
      setIsActive(false);
      clearInterval(intervalId);
      stopHandler();
      // to play audio when timer gets over
      if (bellActive) {
        const audio = new Audio(soundFile);
        audio.play();
      }
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isActive, min, sec]);

  useEffect(() => {
    setMin(timer);
  }, [timer]);

  // to save the time in localstorage
  useEffect(() => {
    localStorage.setItem("min", min);
    localStorage.setItem("sec", sec);
  }, [min, sec]);

  return (
    <div className="timer">
      <p className="running-time">
        {/* logic to append zero */}
        {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
      </p>
      <div className="start-stop-btn-grp">
        <button
          alt="timer-start-pause-btn"
          className="start-pause-btn btn"
          onClick={startpausehandler}
        >
          {isActive ? <BsPauseFill /> : <BsFillPlayFill />}
        </button>
        <button
          alt="timer-stop-btn"
          className="stop-btn btn"
          onClick={stopHandler}
        >
          <BiStop />
        </button>
      </div>
      <select
        className="custom-timer"
        value={0}
        onChange={(e) => {
          !isActive
            ? setTimer(e.target.value)
            : console.log("Timer already running");
          // setCustomTimer(e.target.value);
        }}
      >
        <option value="0"></option>
        <option value="1">00:01:00</option>
        <option value="5">00:05:00</option>
        <option value="10">00:10:00</option>
        <option value="15">00:15:00</option>
        <option value="20">00:20:00</option>
        <option value="25">00:25:00</option>
        <option value="30">00:30:00</option>
        <option value="35">00:35:00</option>
        <option value="40">00:40:00</option>
        <option value="45">00:45:00</option>
        <option value="50">00:50:00</option>
        <option value="55">00:55:00</option>
        <option value="60">01:00:00</option>
        <option value="65">01:05:00</option>
        <option value="70">01:10:00</option>
        <option value="75">01:15:00</option>
        <option value="80">01:20:00</option>
        <option value="85">01:25:00</option>
        <option value="90">01:30:00</option>
        <option value="95">01:35:00</option>
        <option value="100">01:40:00</option>
        <option value="105">01:45:00</option>
        <option value="110">01:50:00</option>
        <option value="115">01:55:00</option>
        <option value="120">02:00:00</option>
        <option value="125">02:05:00</option>
        <option value="130">02:10:00</option>
        <option value="135">02:15:00</option>
        <option value="140">02:20:00</option>
        <option value="145">02:25:00</option>
        <option value="150">02:30:00</option>
        <option value="155">02:35:00</option>
        <option value="160">02:40:00</option>
        <option value="165">02:45:00</option>
        <option value="170">02:50:00</option>
        <option value="175">02:55:00</option>
        <option value="180">03:00:00</option>
      </select>
      <button
        alt="timer-notification-bell-toggle"
        className={bellActive ? "bell-btn active btn" : "bell-btn btn"}
        onClick={() => setBellActive(!bellActive)}
      >
        {bellActive ? <GiSpeaker /> : <GiSpeakerOff />}
      </button>
    </div>
  );
};

export default Timer;
