import React from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header className='header'>
    <ul className='ul'>
      <li className='li'>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li className='li'>
        <NavLink to='/bar'>Bars</NavLink>
      </li>
      <li className='li'>
        <NavLink to='/item'>Items</NavLink>
      </li>
      <li className='li'>
        <NavLink to='/drinker'>Drinkers</NavLink>
      </li>
    </ul>
  </header>
)

export default Header
