import doggo from '../images/doggo.webp'

export default function About() {
  return (
    <div className='about' id='about'>
      <h2 className='secondary-titles about-h2'>About_Me</h2>

      <div className='about-info'>
        <div>
          <p className='title-p'>
            Howdy! My name is Jason and I enjoy creating things. I've
            had an interest in web technology for years and am ready
            to change careers to front end development.
          </p>
          <p className="title-p">
            I have 3 college degrees. None of which are in computer
            science. I enjoy challenging myself. I am self taught in web development.
          </p>
          <p className="title-p">
            Here are some of the technologies that I've been learning:
          </p>
          <ul className="about-list">
            <li className="list-items">JavaScript (ES6+)</li>
            <li className="list-items">TypeScript</li>
            <li className="list-items">React</li>
            <li className="list-items">Node.js</li>
            <li className="list-items">Express</li>
            <li className="list-items">MongoDB</li>
            <li className="list-items">Sass</li>
          </ul>
        </div>
        
        <img src={ doggo } alt='Me' className='about-img-pic' />
      </div>

    </div>
  )
}