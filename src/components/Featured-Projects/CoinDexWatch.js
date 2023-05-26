import githubIcon from '../../images/github-mark-white.png'
// import externalLink from '../../images/external-link.png'

export default function CoinDexWatch() {
  return (
    <div className="projects">
      <div className="project-description project-left-justified">

        <p className="project-title">Featured Project</p>
        <h3 className="tertiary-titles">CoinDexWatch</h3>
        <div className='project-desc-div'>
          <p className="project-desc">
            Web3 app that fetches cryptocurrency price data across 
            different decentralized exchanges (mostly based on the 
            UniswapV2 platform) and different blockchains.
          </p>
          <p className="project-desc">
            Once fetched the price & cryptocurrency pair data is 
            displayed along with from what exchange the price data 
            came from.
          </p>
          <p className="project-desc">
            I decided to try something different in the architecture of 
            this app. I have 1 react client that fetches data from 
            multiple node.js servers
          </p>
        </div>
        <ul className="technologies-ul">
          <li className="technologies-li">React</li>
          <li className="technologies-li">Express</li>
          <li className="technologies-li">Node</li>
          <li className="technologies-li">Typescript</li>
          <li className="technologies-li">Ethers.js</li>
        </ul>
        <div className="project-links">
          <a 
            href='https://github.com/Nineteen991/getDexTokenPrices' 
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
        <div className='project-img-4'></div>
      </div>
    </div>
  )
}