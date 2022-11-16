import React from 'react'

const SunTimes = ({astro}) => {

  const to24h = (time) => {
    return (Number(time?.slice(0,2))+12)+time?.slice(2,-3);
  }

  const rise = astro?.sunrise?.charAt(6) == "A" ? astro?.sunrise?.slice(0,-3) : to24h(astro?.sunrise);
  const set = astro?.sunset?.charAt(6) == "A" ? astro?.sunset?.slice(0,-3) : to24h(astro?.sunset);


  return (
    <div className='sun-times'>
      <div className='sun-times__sunrise'>
        <p className='sun-times__text'>Sunrise: {rise}</p>
      </div>
      <div className='sun-times__sunset'>
        <p className='sun-times__text'>Sunset: {set}</p>
      </div>
    </div>
  )
}

export default SunTimes