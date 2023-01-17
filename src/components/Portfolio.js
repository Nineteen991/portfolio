import { useState } from 'react'

import BGS from './Featured-Projects/BGS'
import Taqueria from './Featured-Projects/Taqueria'
import Chat from './Featured-Projects/Chat'
import QuizAppCard from './Mini-Projects/QuizAppCard'
import MovieWatchList from './Mini-Projects/MovieWatchList'
import ChromeExt from './Mini-Projects/Chrome-ext'
import Alarm from './Mini-Projects/Alarm'
import NotesApp from './Mini-Projects/NotesApp'

export default function Portfolio() {
  const [showMiniProjects, setShowMiniProjects] = useState(false)

  return (
    <div className="portfolio" id="portfolio">
      <h2 className="secondary-titles portfolio-h2">Portfolio</h2>

      {/* Featured Projects */}
      <BGS />
      <Taqueria />
      <Chat />

      {
        !showMiniProjects
          ? (
              <button 
                className='btn mini-projects'
                onClick={ () => setShowMiniProjects(prev => !prev) }
              >
                Show Mini Projects
              </button>
            )
          : <div className='more-projects'>
              <h2 className="tertiary-titles more-projects-title">
                Noteworthy Mini Projects
              </h2>
              <div className='more-projects-container'>
                <QuizAppCard />
                <MovieWatchList />
                <ChromeExt />
                <Alarm />
                <NotesApp />
              </div>
            </div>
      }

    </div>
  )
}