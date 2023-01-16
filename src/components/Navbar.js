import * as Scroll from 'react-scroll'

export default function Navbar({ toggleNavbar, setToggleNavbar }) {
  const ScrollLink = Scroll.Link

  return (
    <nav className='nav'>
      <ScrollLink
        to='hero'
        spy={ true }
        smooth={ true }
        duration={ 500 }
        className='nav-links'
      >
        <h1 className='opening-title nav-logo'>JA</h1>
      </ScrollLink>

      {/* menu icon */}
      <div
        className={ toggleNavbar ? 'nav-extended' : 'nav-burger'}
        onClick={ () => setToggleNavbar(prev => !prev) }
      >
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>

      {/* popout menu */}
      {
        toggleNavbar &&
          <div 
            className='nav-menu' 
            onClick={ () => setToggleNavbar(prev => !prev) }
          >
            <ScrollLink
              to='about'
              spy={ true }
              smooth={ true }
              duration={ 500 }
              className='nav-links'
            >
              01.
              <p className='title-p'>About</p>
            </ScrollLink>
            <ScrollLink
              to='portfolio'
              spy={ true }
              smooth={ true }
              duration={ 500 }
              className='nav-links'
            >
              02.
              <p className='title-p'>Portfolio</p>
            </ScrollLink>
          </div>
      }

      {/* Menu when window width is at least 680px */}
      <div className='nav-wide'>
        <ScrollLink
          to='about'
          spy={ true }
          smooth={ true }
          duration={ 500 }
          className='nav-links'
        >
          <p className='title-p'>
          <span className='nav-span'>01.</span> About
          </p>
        </ScrollLink>
        <ScrollLink
          to='portfolio'
          spy={ true }
          smooth={ true }
          duration={ 500 }
          className='nav-links'
        >
          <p className='title-p'>
            <span className='nav-span'>02.</span> Portfolio
          </p>
        </ScrollLink>
      </div>
      
    </nav>
  )
}