import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Button, Accordion, AccordionItem } from '@carbon/react'
import Sidebar from './components/Sidebar'
import './globals.scss'
import SwitcherImage from './components/SwitcherImage'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="page-holder">
      <Header />
      <div className="content-holder">
        <div className="sidebar-holder">
          <Sidebar />
        </div>
        <div className="switcher-holder">
          <SwitcherImage />
        </div>
      </div>
    </div>
  )
}

export default App
