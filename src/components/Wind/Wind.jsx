import React from 'react'
import arrow from "../../assets/images/Arrow.png"
import "./Wind.scss"

const Wind = ({current}) => {



  return (
    <div className='wind'>
      <img className='wind__arrow' src={arrow} alt="wind arrow"style={{'transform': `rotate(${current?.wind_degree-180}deg)`}} />
      <p className='wind__text'>{current?.wind_dir}</p>
      <p className='wind__text'>{current?.wind_kph} kph</p>
    </div>
  )
}

export default Wind