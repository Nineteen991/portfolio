export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h2 className="secondary-titles contact-before">Get In Touch</h2>
      <p className="title-p">
        You can reach me via email. I would love to hear from you!
      </p>
      <button className="btn contact-btn">
        <a 
          href="mailto:nineteen99@gmail.com" 
          rel="noopener noreferrer" 
          target="_blank"
          className="contact-link"
        >
          Say Hello
        </a>
      </button>
    </div>
  )
}