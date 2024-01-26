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
              <InlineNotification
                aria-label="closes notification"
                kind="error"
                onClose={function noRefCheck(){}}
                onCloseButtonClick={function noRefCheck(){}}
                statusIconDescription="notification"
                subtitle="Status Down"
                title="Live Chat: "
              />
            </div>
          </div>
        </div>
        <DownArrow />
      </div>
      <Footer />
    </div>
  )
}

export default App
