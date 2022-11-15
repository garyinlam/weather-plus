import React from 'react'
import ForecastSingle from '../../components/ForecastSingle/ForecastSingle';
import "./ForecastContainer.scss"

const ForecastContainer = ({forecast, currEpoch}) => {

  const forecastJSX = forecast?.forecastday[0]?.hour?.filter((obj) => obj.time_epoch > currEpoch).map((obj,index) => (
    <ForecastSingle forecastHour={obj} key={index} />
  ));

  return (
    <div className='forecast-container'>
      {forecastJSX}
    </div>
  )
}

export default ForecastContainer