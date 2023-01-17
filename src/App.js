import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
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
        <Routes>
          <Route path='/' element={ <HomePage /> } />
        </Routes>
      </div>
    </div>
  );
}