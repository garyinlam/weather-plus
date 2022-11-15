import React, { useEffect, useState } from 'react'

const Home = () => {
  const [ coords, setCoords ] = useState([51.5,0]);
  const [ weather, setWeather ] = useState({});


  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setCoords([lat,lon]);
      },() => {
        alert("An error occurred")
      });
    } else {
      alert("Allow location services");
    }
  }

  const getWeather = async () => {
    
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${coords[0]},${coords[1]}`)
    const data = await res.json();
    setWeather(data);
    console.log(data);
  }


  useEffect(() => {
    getLocation();
  }, [])

  useEffect(() => {
    getWeather();
  },[coords])
  
  return (
    <div>Home</div>
  )
}

export default Home