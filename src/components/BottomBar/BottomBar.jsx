import React from 'react'
import './BottomBar.css'
import fHome  from '../../assets/home-black.png'
import Home  from '../../assets/home-white.png'
import fShorts  from '../../assets/play-button-black.png'
import Shorts  from '../../assets/play-button-white.png'
import Subs from '../../assets/subs.png'
import profile from '../../assets/profile.png'
import plus from '../../assets/plus.png'

import { useState } from 'react'

const BottomBar = () => {
 const [category, setCategory] = useState("home")
    
  return (
    <div className='bottomFlex'>
             
        <div onClick={()=>{setCategory("home")}}  className={`bottomBar-item ${category==="home"?"clicked":""}`}>
            <img src={category==="home"?fHome:Home} alt="" /><h2>Home</h2>
        </div>

        <div onClick={()=>{setCategory("shorts")}}  className={`bottomBar-item ${category==="shorts"?"clicked":""}`}>
            <img src={category==="shorts"?fShorts:Shorts} alt="" /><h2>Shorts</h2>
        </div>

        <div onClick={()=>{setCategory("add")}}  className={`bottomBar-item`}>
            <img style={{width:"45px"}} src={plus} alt="" />
        </div>

        <div onClick={()=>{setCategory("sub")}}  className={`bottomBar-item ${category==="sub"?"clicked":""}`}>
            <img src={Subs} alt="" /><h2>Subscriptions</h2>
        </div>

        <div onClick={()=>{setCategory("you")}}  className={`bottomBar-item ${category==="you"?"clicked":""}`}>
            <img src={profile} alt="" /><h2>You</h2>
        </div>
            
    </div>

  )
}

export default BottomBar
