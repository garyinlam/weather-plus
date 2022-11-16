import React from 'react'
import sunrise from "../../assets/images/sunrise.png"
import sunset from "../../assets/images/sunset.png"
import "./SunTimes.scss"


const SunTimes = ({astro}) => {

  const to24h = (time) => {
    return (Number(time?.slice(0,2))+12)+time?.slice(2,-3);
  }

  const rise = astro?.sunrise?.charAt(6) === "A" ? astro?.sunrise?.slice(0,-3) : to24h(astro?.sunrise);
  const set = astro?.sunset?.charAt(6) === "A" ? astro?.sunset?.slice(0,-3) : to24h(astro?.sunset);


  return (
    <div className='sun-times'>
      <div className='sun-times__sunrise'>
        <img src={sunrise} alt="sunrise" className='sun-times__image' />
        <p className='sun-times__text'>Sunrise: {rise}</p>

      </div>
      <div className='sun-times__sunset'>
        <img src={sunset} alt="sunset" className='sun-times__image' />
        <p className='sun-times__text'>Sunset: {set}</p>
      </div>
    </div>
  )
}

export default SunTimes