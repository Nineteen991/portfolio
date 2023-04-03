import githubIcon from '../../images/github-mark-white.png'
// import externalLink from '../../images/external-link.png'

export default function Chat() {
  return (
    <div className="projects">
      <div className="project-description project-right-justified">

        <p className="project-title">Featured Project</p>
        <h3 className="tertiary-titles">DevChat</h3>
        <div className='project-desc-div'>
          <p className="project-desc">
            This is a realtime chatroom app made with the MERN stack. It has 3 different chatrooms. Anyone can join a room and add their 2 cents.
          </p>
          <p className="project-desc">
            I wanted to see how to use socket.io. It's pretty cool.
          </p>
          <p className="project-desc">
            I used typescript with the node server.
            I also dockerized the front & back ends for easier
            deployment on your local machine.
          </p>
        </div>
        <ul className="technologies-ul">
          <li className="technologies-li">React</li>
          <li className="technologies-li">Express</li>
          <li className="technologies-li">MongoDB</li>
          <li className="technologies-li">Node</li>
          <li className="technologies-li">Sass</li>
        </ul>
        <div className="project-links">
          <a 
            href='https://github.com/Nineteen991/chatroom-app' 
            className="project-link-a">
            <img 
              src={githubIcon} 
              alt='Github Link'
              className="project-icons"
            />
          </a>
        </div>
      </div>

      <div className='project-img-div right-justified'>
        <div className='project-img-3'></div>
      </div>
    </div>
  )
}