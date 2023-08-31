"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import loading from "../../public/loading-light.gif";
import { AiOutlineSearch, AiOutlineUp, AiOutlineDown } from "react-icons/ai";
const Weather = () => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_APIKEY;
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");
  const [icon, setIcon] = useState("01d");
  const [loader, setLoader] = useState(true);
  const [searchCity, setSearchCity] = useState();
  const [cityError, setCityError] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const weatherAPI_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
  const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  // fetching current location
  const getLocation = async () => {
    try {
      setLoader(true);
      const location = await axios.get("https://ipapi.co/json"); // api for fetching location
      setCity(location.data.city); // location-> data -> city
    } catch (error) {
      setLoader(false);
      console.error(error);
    }
  };

  // fetching weather of that location
  const getWeather = async () => {
    try {
      setCityError(false);
      setLoader(true);
      setSearchCity("");
      // empty city error handling
      if (city.length === 0) {
        setLoader(false);
        console.error("Empty City");
        return;
      }
      // fetching the req
      const response = await axios.get(weatherAPI_URL);
      // city not found error handling
      if (response && response.status === 404) {
        setLoader(false);
        setCityError(true);
        setWeatherData([{}]);
        console.error("Error Occured - Not Found ");
        return;
      }
      // Process the response data
      if (response && response.data) {
        setWeatherData(response.data);
        const { weather } = weatherData;
        if (weather) {
          // fetching the weather icon code from array of objects
          const iconCode = weather[0].icon;
          setIcon(iconCode);
        }
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
      setCityError(true);
      console.error("An error occured, please try again");
    }
  };

  // input change handler
  const handleChange = (e) => {
    setSearchCity(e.target.value);
  };

  // input submit han
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(searchCity);
  };

  useEffect(() => {
    getLocation(); // calling the location function
  }, []);
  useEffect(() => {
    if (city.length > 0) {
      getWeather(); // calling the weather function
    }
  }, [city]);

  return (
    <div className="weather-wrapper">
      {loader ? (
        //  Loading...gif
        <Image
          src={loading}
          alt="weather-icon"
          width={30}
          height={30}
          quality={100}
          className="loader"
        />
      ) : (
        <>
          {/* Showing weather  */}
          <div className="weather">
            {!cityError && (
              <p className="weather-details">
                {weatherData && weatherData.name}
                <Image
                  src={iconURL}
                  alt="weather-icon"
                  width={50}
                  height={50}
                  quality={100}
                  className="weather-icon"
                />
                {Math.round(weatherData.main && weatherData.main.temp)} &#8451;
              </p>
            )}
            {/* if city error occured */}
            {cityError && <p className="weather-details">No such city</p>}

            <button
              alt="weather-search-input-btn"
              className="btn search-toggle-btn"
              onClick={() => setIsToggle(!isToggle)}
            >
              {isToggle ? <AiOutlineUp /> : <AiOutlineDown />}
            </button>
          </div>

          {/* Searching Weather */}
          {isToggle && (
            <form className="weather-search" onSubmit={handleSubmit}>
              <input
                type="text"
                className="weather-search-input"
                placeholder="Search City"
                aria-label="Search City"
                value={searchCity}
                onChange={handleChange}
                name="searchCity"
              />

              <button
                alt="weather-search-btn"
                type="submit"
                className="weather-search-btn"
              >
                <AiOutlineSearch className="weather-search-btn--icon" />
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default Weather;
