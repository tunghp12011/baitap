import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const active = 'text-red'

const normal = ''
const Header = () => {
  return (
    <div>
        <NavLink to = '/' className={({ isActive}) => `${isActive ? 'text-red-400' : ''}`}>
            <h3>Home</h3>
        </NavLink>
        <NavLink to='/info' className={({ isActive }) => `${isActive ? 'text-red-400' : ''}`}>
            <h3>Info</h3>
        </NavLink>
    </div>
  )
}

export default Header
