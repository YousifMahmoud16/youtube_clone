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
       <div className="menuIcon"> <img style={{width:"40px",marginLeft:"15px",marginTop:"9px"}} src={menu} alt="" /></div>
       <div className="logo"> <img src={logo}></img><h1>YouTube</h1></div>
    </div>
    <form class="search flex-box">
    <input type="search" placeholder="Search…" />
    <button type="submit" class="search-btn">
        <img src={search} alt="Search"/>
    </button>
    </form>
    <div className="info flex-box">
        <img src={notification} alt="" />
        <div className="pfp"><img style={{marginTop:"7px"}} src={profile} alt="" /></div>
       <div className="mobileSearch"> <img  src={search} alt="Search"/></div>
    </div>

      </nav>
  )
}

export default Header
