import React from 'react'
import logo from '../../assets/logo.png'
import notification from '../../assets/notification.png'
import profile from '../../assets/profile.png'
import menu from '../../assets/menu.jpg'
import Home  from '../../assets/home-white.png'
import search  from '../../assets/search.png'
import './Header.css'

const Header = () => {
  return (
      <nav>

    <div className="logo flex-box">
        <img style={{width:"40px",marginLeft:"15px"}} src={menu} alt="" />
        <img src={logo}></img>
    </div>
    <form class="search flex-box">
    <input type="search" placeholder="Search…" />
    <button type="submit" class="search-btn">
        <img src={search} alt="Search"/>
    </button>
    </form>
    <div className="info flex-box">
        <img src={notification} alt="" />
        <img src={profile} alt="" />
    </div>

      </nav>
  )
}

export default Header
