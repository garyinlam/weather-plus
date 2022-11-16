import React from 'react'
import WeatherIcon from '../WeatherIcon/WeatherIcon'
import "./ForecastSingle.scss"

const ForecastSingle = ({forecastHour}) => {
  return (
    <div className='forecast-single'>
      <h3 className='forecast-single__time'>{forecastHour?.time.slice(-5)}</h3>
      <WeatherIcon current={forecastHour}/>
      <div className='forecast-single__weather'>
        <p className='forecast-single__text'>{forecastHour?.temp_c}°C</p>
        <p className='forecast-single__text'>Chance of rain:</p>
        <p className='forecast-single__text'>{forecastHour?.chance_of_rain}%</p>
      </div>
    </div>
  )
}

export default ForecastSingle