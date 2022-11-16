import React from 'react'
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import Wind from '../Wind/Wind';
import "./CurrentWeather.scss"

const CurrentWeather = ({weather}) => {
  return (
    <div className='current-weather'>
      <div className='current-weather__left'>
        <h2 className='current-weather__location'>{weather?.location?.name}</h2>
        <div className='current-weather__icon'>
          <WeatherIcon current={weather?.current} />
        </div>
        <div className='current-weather__temp'>
          <p className='current-weather__text'>{weather?.current?.temp_c}°C</p>
          <p className='current-weather__text'>Feels like: {weather?.current?.feelslike_c}°C</p>
        </div>
      </div>
      <div className='current-weather__middle'>
        <Wind current={weather?.current}/>
      </div>
      <div className='current-weather__right'>
        <p className='current-weather__text'>Humidity: {weather?.current?.humidity}%</p>
        <p className='current-weather__text'>Cloud cover: {weather?.current?.cloud}%</p>

      </div>
    </div>
  )
}

export default CurrentWeather