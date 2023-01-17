import githubIcon from '../../images/github-mark-white.png'

export default function NotesApp() {
  return (
    <div className="mini-container">
      <p className="project-title">Mini Project</p>
      <h3 className="tertiary-titles">Notes App</h3>
      <div className='mini-desc-div'>
        <p className="project-desc">
          I created a notes app in react that's similiar to the one I created in vanilla js (https://github.com/Nineteen991/notes-app-javascript).
        </p>
        <p className="project-desc">
          You can add, edit, & delete notes.
        </p>
        <p className="project-desc">
          My first react app on my own. Just seeing if I can do it. I didn't use any tutorials.
        </p>
        <p className="project-desc">
          I also didn't put much effort into the styling. I was more concerned about functionality.
        </p>
      </div>
      <ul className="technologies-ul">
        <li className="technologies-li">React</li>
      </ul>
      <div className="project-links">
        <a 
          href='https://github.com/Nineteen991/notes-app-react'
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