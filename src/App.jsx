import './App.css'


import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <>
  <Navbar />
  {/* home section design */}
  <section className="home" id="home">
    <div className="home-content">
      <h3>Hello, It's Me</h3>
      <h1>Hardik Raiyani</h1>
      <h3>
        And I'm a <span className="multiple-text" />
      </h3>
      <p>
        I'm a software engineer with a passion for building web applications
        that are both functional and aesthetically pleasing.
      </p>
      <br />
      <div className="social-media">
        <a href="https://www.facebook.com/hr.h.hr.581">
          <i className="bx bxl-facebook" />
        </a>
        <a href="https://x.com/hardik_rai42962">
          <i className="bx bxl-twitter" />
        </a>
        <a href="https://github.com/hardikraiyani98">
          <i className="fa-brands fa-github" />
        </a>
        <a href="https://www.instagram.com/imhardikraiyani/?hl=en">
          <i className="bx bxl-instagram-alt" />
        </a>
        <a href="https://www.linkedin.com/in/hardik-raiyani-5992a8362">
          <i className="bx bxl-linkedin" />
        </a>
      </div>
      <a href="tel:+919624456199" className="btn">
        <i className="fa-solid fa-phone" />
        &nbsp;&nbsp;Call
      </a>
    </div>
    <div className="home-img">
      <img src="images/new.png" alt="" />
    </div>
  </section>
  <marquee behavior="scroll" direction="left" className='marquee'>
  <div className="ticker-wrap">
      <div className='miteam'>
        <img src="images/react.svg"  style={{ height: '24px', width: '24px' }}  />
        <p className='text-25'>React</p>
      </div>
      <div className='miteam'>
        <img src="images/tailwind.svg" style={{ height: '24px', width: '24px' }} />
        <p className='text-25'>Tailwind CSS</p>
      </div>
      <div className='miteam'>
        <img src="images/nodejs.svg" style={{ height: '24px', width: '24px' }} />
        <p className='text-25'>Node.js</p>
      </div>
      <div className='miteam'>
        <img src="images/nextjs.svg" style={{ height: '24px', width: '24px' }} />
        <p className='text-25'>Next.js</p>
      </div>
      <div className='miteam'>
        <img src="images/postgresql.svg" style={{ height: '24px', width: '24px' }} />
        <p className='text-25'>PostgreSQL </p>
      </div>
      <div className='miteam'>
        <img src="images/mongodb.svg" style={{ height: '24px', width: '24px' }} />
        <p className='text-25'>MongoDB </p>
      </div>
      <div className='miteam'>
        <img src="images/express.svg" style={{ height: '24px', width: '24px' }} />
        <p className='text-25'>Express</p>
      </div>
      <div className='miteam'>
        <img src="images/AWS.jpg" style={{ height: '24px', width: '24px' }} />
        <p className='text-25'>AWS </p>
      </div>
      <div className='miteam'>
        <img src="images/docker.svg" style={{ height: '24px', width: '24px' }} />
        <p className='text-25'>Docker </p>
      </div>
      <div className='miteam'>
        <img src="images/gsap.svg" style={{ height: '24px', width: '24px' }} />
        <p className='text-25'>GSAP </p>
      </div>
      <div className='miteam'>
        <img src="images/framermotion.svg" style={{ height: '24px', width: '24px' }} />
        <p className='text-25'>Framer Motion</p>
      </div>
   
  </div>
  </marquee>
  {/* about section design */}
  <section className="about" id="about">
    <div className="about-img">
      <img src="images/profile2.png" alt="" />
    </div>
    <div className="about-content">
      <h2 className="heading">
        About <span>Me</span>
      </h2>
      <h3>Frontend Developer!</h3>
      <p>
        Creating the user interface (UI) and user experience (UX) using
        technologies like HTML, CSS, and JavaScript, potentially including UI
        frameworks like React or Vue.
      </p>
      <a href="#" className="btn">
        Read More
      </a>
    </div>
  </section>
  {/* services section design */}
  <section className="services" id="services">
    <h2 className="heading">
      Ser<span>vices</span>
    </h2>
    <div className="services-container">
      <div className="services-box">
        <i className="bx bx-code-alt" />
        <h3>Web Development</h3>
        <p>
          Builds and maintains websites. Work with various technologies like
          HTML, CSS, and JavaScript to create the front-end (what users see) and
          potentially the back-end (server-side logic and databases) of a
          website.Also work with tools and frameworks to manage and deploy
          websites.
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
      <div className="services-box">
        <i className="bx bxs-paint" />
        <h3>Graphic Design</h3>
        <p>
          Web graphic design is ensuring that the website is easy to navigate
          and provides a positive user experience.
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
      <div className="services-box">
        <i className="bx bx-bar-chart-alt" />
        <h3>Digital Marketing</h3>
        <p>
          The promotion of products or services using digital channels and
          technologies, including the internet and other electronic media.
        </p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
    </div>
  </section>
  {/* portfolio section design */}
  <section className="portfolio" id="portfolio">
    <h2 className="heading">
      Latest <span>Project</span>
    </h2>
    <div className="portfolio-container">
      <div className="portfolio-box">
        <img src="images/portfolio1.jpg" alt="" />
        <div className="portfolio-layer">
          <h4>Transformation</h4>
          <p>
            The biggest enemy of digital transformation is digitalisation. It
            sounds similar, but there is a significant difference:
            transformation means rethinking things. Digitalisation, on the other
            hand, only continues old processes in digital form without using the
            advantages of digital technologies.
          </p>
          <a href="#">
            <i className="bx bx-link-external" />
          </a>
        </div>
      </div>
      <div className="portfolio-box">
        <img src="images/portfolio2.jpg" alt="" />
        <div className="portfolio-layer">
          <h4>Software</h4>
          <p>
            It's like building a house: If the architecture isn't right, even
            the best implementation will fail. The technical objectives,
            planning, and conception are half the battle. At least.
          </p>
          <a href="#">
            <i className="bx bx-link-external" />
          </a>
        </div>
      </div>
      <div className="portfolio-box">
        <img src="images/portfolio3.jpg" alt="" />
        <div className="portfolio-layer">
          <h4>Designs</h4>
          <p>
            Steve Jobs, known for his understatements, once said: "We made the
            buttons on the screen look so good you'll want to lick them." For
            hygienic reasons, I don't recommend it.But you should definitely
            fall in love with a design that not only looks good, but above all,
            is intelligent and functional..
          </p>
          <a href="#">
            <i className="bx bx-link-external" />
          </a>
        </div>
      </div>
      <div className="portfolio-box">
        <img src="images/portfolio4.jpg" alt="" />
        <div className="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            ratione.
          </p>
          <a href="#">
            <i className="bx bx-link-external" />
          </a>
        </div>
      </div>
      <div className="portfolio-box">
        <img src="images/portfolio5.jpg" alt="" />
        <div className="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            ratione.
          </p>
          <a href="#">
            <i className="bx bx-link-external" />
          </a>
        </div>
      </div>
      <div className="portfolio-box">
        <img src="images/portfolio6.jpg" alt="" />
        <div className="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            ratione.
          </p>
          <a href="#">
            <i className="bx bx-link-external" />
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* contact section design */}
  <section className="contact" id="contact">
    <h2 className="heading">
      Contact <span>Me!</span>
    </h2>
    <form action="https://formspree.io/f/mqadzbdl" method="POST">
      <div className="input-box">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
      </div>
      <div className="input-box">
        <input type="number" placeholder="Mobile Number" />
        <input type="text" placeholder="Email Subject" />
      </div>
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        placeholder="Your Message"
        defaultValue={""}
      />
      <button type="submit" className="btn">
        Send Message
      </button>
    </form>
  </section>
  {/* footer design */}

</>

  
  )
}

export default App
