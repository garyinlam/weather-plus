import React from 'react'
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import "./CurrentWeather.scss"

const CurrentWeather = ({weather}) => {
  return (
    <div className='current-weather'>
      <h2 className='current-weather__location'>{weather?.location?.name}</h2>
      <div className='current-weather__icon'>
        <WeatherIcon current={weather?.current} />
      </div>
      <div className='current-weather__temp'>
        <p>{weather?.current?.temp_c}°C</p>
      </div>
      
    </div>
  )
}

export default CurrentWeather