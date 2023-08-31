"use client";
import React, { useEffect, useState } from "react";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { BsPauseFill, BsFillPlayFill } from "react-icons/bs";
import { BiStop } from "react-icons/bi";

const Stopwatch = () => {
  const [isActive, setIsActive] = useState(false); //false=pause, true=start
  const [timer, setTimer] = useState(0); //pomodoro
  const [min, setMin] = useState(timer);
  const [sec, setSec] = useState(0);

  let intervalId;

  const startpausehandler = () => {
    setIsActive(!isActive); //switch b/w start and pause
  };

  const stopHandler = () => {
    setIsActive(false);
    setMin(timer);
    setSec(0);
  };

  useEffect(() => {
    if (isActive && min >= 0 && sec >= 0) {
      intervalId = setInterval(() => {
        if (sec === 59) {
          setSec(0);
          setMin(min + 1);
        } else {
          if (sec === 0) {
            setSec(59);
          }
          setSec(sec + 1);
        }
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isActive, min, sec]);

  useEffect(() => {
    setMin(timer);
  }, [timer]);

  return (
    <div className="stopwatch">
      <p className="running-time">
        {/* logic to append zero */}
        {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
      </p>
      <div className="start-stop-btn-grp">
        <button
          alt="stopwatch-start-pause-btn"
          className="start-pause-btn btn"
          onClick={startpausehandler}
        >
          {isActive ? <BsPauseFill /> : <BsFillPlayFill />}
        </button>
        <button
          alt="stopwatch-stop-btn"
          className="stop-btn btn"
          onClick={stopHandler}
        >
          <BiStop />
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
