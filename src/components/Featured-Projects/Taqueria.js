import githubIcon from '../../images/github-mark-white.png'
import externalLink from '../../images/external-link.png'

export default function Taqueria() {
  return (
    <div className="projects">
      <div className="project-description project-right-justified">

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

      <div className='project-img-div right-justified'>
        <div className='project-img-2'></div>
      </div>
    </div>
  )
}