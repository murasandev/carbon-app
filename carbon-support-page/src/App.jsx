import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Button, InlineNotification } from '@carbon/react'
import Sidebar from './components/Sidebar'
import './globals.scss'
import SwitcherImage from './components/SwitcherImage'
import ContactForm from './components/ContactForm'
import DownArrow from './components/DownArrow'
import Footer from './components/Footer'
import Notification from './components/Notification'
import ButtonRow from './components/ButtonRow'
import ImageHolder from './components/ImageHolder'
import RoadMap from './components/RoadMap'



function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="page-holder">
      <Header />
      
      <div className="title-content-holder">
        <h1 className='page-title'>Support</h1>
        <div className="content-holder">
          
          <div className="sidebar-holder">
            <Sidebar />
          </div>
          <div className="switcher-holder">
            <SwitcherImage />
            <div className="notification-holder">
              <Notification />
            </div>
          </div>
        </div>
        <DownArrow />
        <RoadMap />
        <h1>Popular Searches </h1>
        <ButtonRow />
        <h1>Front End Topics</h1>
        <ButtonRow />
        <h1>Back End Topics</h1>
        <ButtonRow />
        <h1>Learning</h1>
        <ButtonRow />
      </div>
      <Footer />
    </div>
  )
}

export default App
