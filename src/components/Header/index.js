import React, { useState } from 'react'

import './Header.css'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className="header">
      <h1 className="logo">Apiki</h1>
      <nav className="menu">
        <button onClick={() => setShowMenu(!showMenu)} className="menu__btn">
          MENU
          <span></span>
        </button>

        <ul className={`menu__items ${showMenu ? 'active' : ''}`} >
          <li className="menu__item"><a href="#">Home</a></li>
          <li className="menu__item"><a href="#">Sobre</a></li>
        </ul>


      </nav>
    </header>
  )
}
