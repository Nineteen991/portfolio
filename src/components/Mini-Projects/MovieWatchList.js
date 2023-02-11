import githubIcon from '../../images/github-mark-white.png'

export default function MovieWatchList() {
  return (
    <div className="mini-container">
      <p className="project-title">Mini Project</p>
      <h3 className="tertiary-titles">Movies Watchlist</h3>
      <div className='mini-desc-div'>
        <p className="project-desc">
          A basic IMDB clone that connects to the OMDB API. Use it for creating a list of movies that you want to watch.
        </p>
        <p className="project-desc">
          This is the react version of the movies watchlist I made just to see the differences in creating apps. The vanilla javascript version is in my github.
        </p>
      </div>
      <ul className="technologies-ul">
        <li className="technologies-li">React</li>
        <li className="technologies-li">Styled Components</li>
      </ul>
      <div className="project-links">
        <a 
          href='https://github.com/Nineteen991/movie-watchlist-react'
          className="project-link-a">
          <img 
            src={githubIcon} 
            alt='Github Link'
            className="project-icons"
          />
        </a>
      </div>
    </div>
  )
}