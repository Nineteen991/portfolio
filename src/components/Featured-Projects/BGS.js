import githubIcon from '../../images/github-mark-white.png'
// import externalLink from '../../images/external-link.png'

export default function BGS() {
  return (
    <div className="projects">
      <div className="project-description project-left-justified">

        <p className="project-title">Featured Project</p>
        <h3 className="tertiary-titles">Santa Cruz Games</h3>
        <div className='project-desc-div'>
          <p className="project-desc">
            An e-commerce store that I created that sells tabletop
            board games. On each game that is clicked, a modal pops
            up with a detailed description.
          </p>
          <p className="project-desc">
            I built a node.js backend that uses MongoDB Atlas & 
            Mongoose to track product inventory & orders placed.
            I also dockerized the front & back ends for easier
            deployment on your local machine.
          </p>
          {/* <p className="project-desc">
            The web app also uses Stripe for payments. Developer 
            Visa card number is 4242 4242 4242 4242. You can use
            any future expiration date, zip, & csv code.
          </p> */}
        </div>
        <ul className="technologies-ul">
          <li className="technologies-li">React</li>
          <li className="technologies-li">Express</li>
          <li className="technologies-li">MongoDB</li>
          <li className="technologies-li">Node</li>
          <li className="technologies-li">Stripe</li>
        </ul>
        <div className="project-links">
          <a 
            href='https://github.com/Nineteen991/board-game-store' 
            className="project-link-a">
            <img 
              src={githubIcon} 
              alt='Github Link'
              className="project-icons"
            />
          </a>
        </div>
      </div>

      <div className='project-img-div left-justified'>
        <div className='project-img'></div>
      </div>
    </div>
  )
}