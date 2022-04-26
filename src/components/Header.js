import React from 'react'
import '../assets/sass/Header.scss'

import headerimg from '../assets/img/Picture1.png'
function Header() {
  return (
    <div>
       <h1>Ümid Şəmdinli</h1>
       <h4 style={{color:"white"}}>Software Developer</h4>
        <img src={headerimg} alt="" />
    </div>
  )
}

export default Header