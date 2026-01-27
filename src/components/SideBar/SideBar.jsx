import React, { useState } from 'react'
import './SideBar.css'
import profile from '../../assets/profile.png'
import fHome  from '../../assets/home-black.png'
import Home  from '../../assets/home-white.png'
import fShorts  from '../../assets/play-button-black.png'
import Shorts  from '../../assets/play-button-white.png'
import history from '../../assets/history.png'
import playlist  from '../../assets/playlist.png'
import watchLater  from '../../assets/clock.png'
import fLiked  from '../../assets/like-black.png'
import Liked  from '../../assets/like-white.png'
import videos  from '../../assets/video.png'
import logo3  from '../../assets/logo3.png'
import more  from '../../assets/down-arrow.png'
import pfp1  from '../../assets/pfp1.webp'
import pfp2  from '../../assets/pfp2.webp'
import pfp3  from '../../assets/pfp3.webp'
import barcelona from '../../assets/logo1.png'
import Subs from '../../assets/subs.png'
const SideBar = () => {
  const [category, setCategory] = useState("Home")

//   const src = category==="Home"?fHome:Home
    return (


    <aside>

     <div className="flex card1">
       <div onClick={()=>{setCategory("Home")}} className={`${category==="Home"?"focused-item":"item"} flex-row`}>
        <img style={{width:"24px"}} src={category==="Home"?fHome:Home} alt="" /> <h2>Home</h2>
       </div>
       <div onClick={()=>{setCategory("Shorts")}} className={`${category==="Shorts"?"focused-item":"item"} flex-row`}>
        <img style={{width:"24px"}} src={category==="Shorts"?fShorts:Shorts} alt="" /> <h2>Shorts</h2>
       </div>
       <div onClick={()=>{setCategory("subs")}} className={`${category==="subs"?"focused-item":"item"} flex-row Subscribtions`}>
        <img style={{width:"24px"}} src={Subs} alt="" /> <h2>Subscribtions</h2>
       </div>
    </div>
    
      <hr />
    <div className="flex subscribtion">

        <div onClick={()=>{setCategory("Subscribtions")}} className={`${category==="Subscribtions"?"focused-item":"item"} flex-row title`}>
        <h2>Subscribtions</h2> <h2>&gt;</h2>
       </div>
    
    
        <div onClick={()=>{setCategory("Tarmeez")}} className={`${category==="Tarmeez"?"focused-item":"item"} flex-row`}>
        <img style={{width:"33px"}} src={barcelona} alt="" /> <h3>Barcelona</h3>
       </div>
    
    
        <div onClick={()=>{setCategory("elzero")}} className={`${category==="elzero"?"focused-item":"item"} flex-row`}>
        <img style={{width:"30px"}} src={pfp3} alt="" /> <h3>Elzero Web School</h3>
       </div>
        
        <div onClick={()=>{setCategory("codeZone")}} className={`${category==="codeZone"?"focused-item":"item"} flex-row`}>
        <img style={{width:"37px"}} src={logo3} alt="" /> <h3>beIn SPORTS</h3>
       </div>

    </div>

      <hr />
      <div className="flex actions">

         <div onClick={()=>{setCategory("You")}} className={`${category==="You"?"focused-item":"item"} flex-row title`}>
                <h2>You</h2> <h2>&gt;</h2>
         </div>

         <div onClick={()=>{setCategory("History")}} className={`${category==="History"?"focused-item":"item"} flex-row`}>
        <img style={{width:"24px"}} src={history} alt="" /> <h3>History</h3>
       </div>
    
    
        <div onClick={()=>{setCategory("Playlists")}} className={`${category==="Playlists"?"focused-item":"item"} flex-row`}>
        <img style={{width:"24px"}} src={playlist} alt="" /> <h3>Playlists</h3>
       </div>
        
        <div onClick={()=>{setCategory("WatchLater")}} className={`${category==="WatchLater"?"focused-item":"item"} flex-row`}>
        <img style={{width:"24px"}} src={watchLater} alt="" /> <h3>Watch Later</h3>
       </div>

       <div onClick={()=>{setCategory("Liked")}} className={`${category==="Liked"?"focused-item":"item"} flex-row`}>
        <img style={{width:"24px"}} src={category==="Liked"?fLiked:Liked} alt="" /> <h3>Liked Videos</h3>
       </div>
    
    
        <div onClick={()=>{setCategory("Your")}} className={`${category==="Your"?"focused-item":"item"} flex-row`}>
        <img style={{width:"24px"}} src={videos} alt="" /> <h3>Your videos</h3>
       </div>
        
        <div onClick={()=>{setCategory("Show")}} className={`${category==="Show"?"focused-item":"item"} flex-row`}>
        <img style={{width:"24px"}} src={more} alt="" /> <h3>Show more</h3>
       </div>


      </div> 
      <hr />
      <div className="flex footer">
        <div className="footer1">
        <h4>About Press Copyright</h4>
        <h4>Contact us Creator Advertise</h4>
        <h4>Developers</h4>
        </div>
        <div className="footer2">
            <h4>Terms Privacy Policy & Safety</h4>
            <h4>How YouTube works</h4>
            <h4>Test new features</h4>
        </div>
        <div className="footer3">
            <p>&copy; 2026 Google LLC</p>
        </div>
      </div>

    </aside>
 
  )
}

export default SideBar
