import React from 'react'
import "./NavBar.scss"

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <a href="#top" className='nav-bar__link'>Top</a>
      <a href="#weather" className='nav-bar__link'>Weather</a>
      <a href="#todo" className='nav-bar__link'>To Dos</a>
    </div>
  )
}

export default NavBar