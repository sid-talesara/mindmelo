"use client";
import React, { useState } from "react";
import { BsHourglassBottom, BsFillStopwatchFill } from "react-icons/bs";

import Timer from "./Timer";
import Stopwatch from "./Stopwatch";

const Focus = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="focus-wrapper">
      <div className="focus">
        <button
          alt="timer-stopwatch-toggle-btn"
          className="timer-stopwatch-toggle-btn btn"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? <BsHourglassBottom /> : <BsFillStopwatchFill />}
        </button>

        {!isActive && <Stopwatch />}
        {isActive && <Timer />}
      </div>
    </div>
  );
};

export default Focus;
