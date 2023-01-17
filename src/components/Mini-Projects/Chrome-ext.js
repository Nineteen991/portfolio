import githubIcon from '../../images/github-mark-white.png'
import externalLink from '../../images/external-link.png'

export default function ChromeExt() {
  return (
    <div className="mini-container">
      <p className="project-title">Mini Project</p>
      <h3 className="tertiary-titles">Chrome-ext</h3>
      <div className='mini-desc-div'>
        <p className="project-desc">
          This is a chrome ext that I created that pulls from the Coin Gecko api, OpenWeather api, bored api, and the unsplash api's.
        </p>
        <p className="project-desc">
          This is all displayed on a single page everytime you open a new tab.
        </p>
        <p className="project-desc">
          Note: the chrome ext is not in the chrome store; only on my chrome browser
        </p>
      </div>
      <ul className="technologies-ul">
        <li className="technologies-li">React</li>
        <li className="technologies-li">Styled Components</li>
      </ul>
      <div className="project-links">
        <a 
          href='https://github.com/Nineteen991/chrome-ext'
          className="project-link-a">
          <img 
            src={githubIcon} 
            alt='Github Link'
            className="project-icons"
          />
        </a>
        <a 
          href='https://main--spiffy-figolla-126057.netlify.app/' 
          className="project-link-a">
          <img src={externalLink} alt="Link" className='project-icons' />
        </a>
      </div>
    </div>
  )
}