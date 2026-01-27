import React from 'react'
import '../Content/Content.css'
import video1 from '../../assets/video1.jpg'
import logo1 from '../../assets/logo1.png'
import verefied from '../../assets/check.png'

const Video = ({picture,channelLogo,videoTitle,channelName,ago}) => {
  return (
    <div className='video'>
       <div className="picture">
                      <img src={picture} alt="" />
                  </div>
                  <div className="details">
                      <img src={channelLogo} alt="" />
                      <h2>{videoTitle}</h2>
                      <h2>⋮</h2>
                  </div>
                  <div className="user-info">
                      <div className="channel-name"><p>{channelName}</p><img src={verefied} alt="" /></div>
                      <p>{ago}</p>
                  </div>
    </div>
  )
}

export default Video
