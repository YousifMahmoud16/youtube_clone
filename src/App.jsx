import React from 'react'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Content from './components/Content/Content'
import './App.css'
import BottomBar from './components/BottomBar/BottomBar'

const App = () => {
  return (
    <>
      <div className="app">
        
        <div className="header">
          <Header/>
        </div>

    <div  className="sidebar">
      <SideBar/>
    </div>


    <div  className="content">
      
      <Content/>
    </div>

       
   </div>
   <div className="bottomBar">
        <BottomBar/>
       </div>
</>
  )
}

export default App
