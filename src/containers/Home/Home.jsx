import React, { useEffect, useState } from "react";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
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
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${coords[0]},${coords[1]}`
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
    <div className={"home " + timeOfDay}>
      <h1 className="home__title">Good {timeOfDay}</h1>
      <div className="home__weather">
        <h2 className="home__title">Weather</h2>
        <CurrentWeather weather={weather} />
        <div>
          <ForecastContainer forecast={weather?.forecast} currEpoch={weather?.current?.last_updated_epoch} />
        </div>
      </div>
    </div>
  );
};

export default Home;
