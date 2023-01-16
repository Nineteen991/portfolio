import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Work from './components/Work'
import Contact from './components/Contact'
import './App.sass'

export default function App() {
  const [toggleNavbar, setToggleNavbar] = useState(false)

  return (
    <div className="container">
      <Navbar 
        toggleNavbar={ toggleNavbar } 
        setToggleNavbar={ setToggleNavbar } 
      />
      <div 
        className={`content ${ toggleNavbar ? 'blur-bg' : '' }`}
        onClick={ 
          toggleNavbar 
            ? (() => setToggleNavbar(prev => !prev))
            : null
        }
      >
        <Hero />
        <About />
        <Portfolio />
        <Work />
        <Contact />
      </div>
    </div>
  );
}