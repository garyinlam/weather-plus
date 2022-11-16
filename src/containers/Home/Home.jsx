import React, { useEffect, useState } from "react";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import NavBar from "../../components/NavBar/NavBar";
import SunTimes from "../../components/SunTimes/SunTimes";
import ToDo from "../../components/ToDo/ToDo";
import ForecastContainer from "../ForecastContainer/ForecastContainer";
import "./Home.scss"

const Home = () => {
  const [coords, setCoords] = useState([51.5, 0]);
  const [weather, setWeather] = useState({});

  const time = new Date().getHours();

  const timeOfDay = (time > 5 && time < 20) ? ((time > 5 && time < 12) ? "morning" : ((time > 11 && time < 17) ? "afternoon" : "evening")) : "night";

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setCoords([lat, lon]);
        },
        () => {
          alert("An error occurred");
        }
      );
    } else {
      alert("Allow location services");
    }
  };

  const getWeather = async () => {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${coords[0]},${coords[1]}`
    );
    const data = await res.json();
    setWeather(data);
    console.log(data);
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    getWeather();
  }, [coords]);

  return (
    <div className={"home " + timeOfDay} id="top">
      <NavBar />
      <h1 className="home__title">Good {timeOfDay}</h1>
      <div className="home__weather" id="weather">
        <h2 className="home__title">Weather</h2>
        <div className="home__top">
          <CurrentWeather weather={weather} />
          <SunTimes astro={weather?.forecast?.forecastday[0]?.astro} />
        </div>
        <div className="home__forecast">
          <ForecastContainer forecast={weather?.forecast} currEpoch={weather?.current?.last_updated_epoch} />
        </div>
      </div>

      <div className="home__todo" id="todo">
        <h2 className="home__title">To Dos</h2>
        <ToDo/>
      </div>
    </div>
  );
};

export default Home;
