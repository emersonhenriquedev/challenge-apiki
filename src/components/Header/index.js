import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className="header">
      <h1 className="logo">Apiki</h1>
      <nav className="menu">
        <button onClick={() => setShowMenu(!showMenu)} className={`menu__btn ${showMenu ? 'active' : ''}`}>
          MENU
          <span></span>
        </button>

        <ul className={`menu__items ${showMenu ? 'active' : ''}`} >
          <li className="menu__item"> <Link to="/" >Home</Link></li>
          <li className="menu__item"> <Link to="/about" >Sobre</Link></li>
        </ul>


      </nav>
    </header >
  )
}
