import * as React from 'react'
// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNavBar from '../components/PageNavBar'
import About from './About'
import Projects from './Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const App = () => {
  return (
    <div className='overall-wrapper'>
      <div className='site-wrapper'>
        <BrowserRouter>
          <PageNavBar />
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
