import React from 'react'

const WeatherIcon = ({current}) => {
  return (
    <div className='weather-icon'>
      <img src={current?.condition?.icon} alt={current?.condition?.text} className="weather-icon__image" />
      <p className='weather-icon__text'>{current?.condition?.text}</p>
    </div>
  )
}

export default WeatherIcon