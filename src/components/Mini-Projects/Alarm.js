import githubIcon from '../../images/github-mark-white.png'
import externalLink from '../../images/external-link.png'

export default function Alarm() {
  return (
    <div className="mini-container">
      <p className="project-title">Mini Project</p>
      <h3 className="tertiary-titles">JS Alarm Clock</h3>
      <div className='mini-desc-div'>
        <p className="project-desc">
          I just wanted to practice vanilla JS, so I made an alarm clock.
        </p>
        <p className="project-desc">
          I also created an express server, just for fun
        </p>
      </div>
      <ul className="technologies-ul">
        <li className="technologies-li">Vanilla JavaScript</li>
      </ul>
      <div className="project-links">
        <a 
          href='https://github.com/Nineteen991/alarm-clock'
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