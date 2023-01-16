import githubIcon from '../images/github-mark-white.png'
import externalLink from '../images/external-link.png'

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h2 className="secondary-titles portfolio-h2">Portfolio</h2>

      <div className="projects">
        <div className="project-description project-right-justified">

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
            </p>
            <p className="project-desc">
              The web app also uses Stripe for payments. Developer 
              Visa card number is 4242 4242 4242 4242. You can use
              any future expiration date, zip, & csv code.
            </p>
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
            <a 
              href='https://main--spiffy-figolla-126057.netlify.app/' 
              className="project-link-a">
              <img src={externalLink} alt="Link" className='project-icons' />
            </a>
          </div>
        </div>

        <div className='project-img-div right-justified'>
          <div className='project-img'></div>
        </div>
      </div>

      <div className="projects">
        <div className="project-description project-left-justified">

          <p className="project-title">Featured Project</p>
          <h3 className="tertiary-titles">Taqueria Tepeque</h3>
          <div className='project-desc-div'>
            <p className="project-desc">
              There is a taqueria about a block from where I live
              that has good food but a terrible website.
            </p>
            <p className="project-desc">
              For fun, I decided to create a better website using react.
            </p>
            <p className="project-desc">
              One day, I might introduce myself to the owners and see
              if they want to trade the code for a bean burrito.
            </p>
            <p className="project-desc">
              If they're feeling generous, I'll see if they can throw in
              a cervesa.
            </p>
          </div>
          <ul className="technologies-ul">
            <li className="technologies-li">React</li>
            <li className="technologies-li">Sass</li>
          </ul>
          <div className="project-links">
            <a 
              href='https://github.com/Nineteen991/taqueriaTepeque' 
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

        <div className='project-img-div left-justified'>
          <div className='project-img-2'></div>
        </div>
      </div>

      <button className='btn mini-projects'>Show Mini Projects</button>

    </div>
  )
}