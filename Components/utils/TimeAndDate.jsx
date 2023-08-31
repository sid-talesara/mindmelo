"use client";
import React, { useState, useEffect } from "react";

const TimeAndDate = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="timeAndDate-wrapper">
      <p className="timeAndDate">{formatDate(currentDate)}</p>
    </div>
  );
};
const formatDate = (date) => {
  const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  // Format the date and time
  const formattedDate = new Intl.DateTimeFormat("en-IN", options).format(date);

  // Remove "at" from the formatted date
  if (formattedDate.includes("Saturday")) {
    return formattedDate;
  } else {
    const dateWithoutAt = formattedDate.replace("at", "|");
    return dateWithoutAt;
  }
};
export default TimeAndDate;
