import githubIcon from '../../images/github-mark-white.png'
import externalLink from '../../images/external-link.png'

export default function QuizAppCard() {
  return (
    <div className="mini-container">
      <p className="project-title">Mini Project</p>
      <h3 className="tertiary-titles">Quiz App</h3>
      <div className='mini-desc-div'>
        <p className="project-desc">
          Simple Quiz App that connects to the Trivia API db.
        </p>
        <p className="project-desc">
          You select the number of questions, category, & difficulty.
        </p>
        <p className="project-desc">
          Use it for your next trivia night.
        </p>
      </div>
      <ul className="technologies-ul">
        <li className="technologies-li">React</li>
        <li className="technologies-li">Sass</li>
      </ul>
      <div className="project-links">
        <a 
          href='https://github.com/Nineteen991/quiz-app'
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