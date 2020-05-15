import React, {useRef} from 'react';
import './styles/about.css';
import headshot from './assets/pic.jpg'
import plantingDay from './assets/planting_day_GGNPC.jpeg';
import familyPhoto from './assets/family_photo.jpg';



function About() {
  const about = useRef(document.getElementById("about"))
  const overviewRef = useRef(null)
  const workRef = useRef(null)
  const personalRef = useRef(null)
  const otherRef = useRef(null)

  const scrollToRef = (ref) => about.current.scrollTo(0, ref.current.offsetTop - 90)


  return (
    <div id="about" ref={about} className="about">  
      <div className="about-nav">
        <ul className="about-nav-list">
          <li onClick={() => scrollToRef(overviewRef)}>OVERVIEW</li>
          <li onClick={() => scrollToRef(workRef)}>WORK HISTORY</li>
          <li onClick={() => scrollToRef(personalRef)}>PERSONAL HISTORY</li>
          <li onClick={() => scrollToRef(otherRef)}>OTHER</li>
        </ul>
      </div>
      
      <section className="about-body">
        <section className="about-section">
          <h2 className="about-header" ref={overviewRef}>Overview</h2>
          <div className="img-container">
            <img className="img headshot" src={headshot} alt="Fue's head shot" />
          </div>
          <article className="about-text">
            <br/><br/>
            Hi I'm Fue, a software engineer interested in building cool things that will enrich the lives of others.
            <br/><br/>
            I've always had a passion for science and technology but I got into coding because I wanted to do something to address all problems that I was seeing and experiencing in the world. Coding allowed me to use my skills to reach places I couldn't have imagine possible.
            <br/><br/>
            Interested in working or chatting with me? Don't hesitate and <a href="#/contact">reach out</a>. I'd love to hear from you.
          </article>
        </section>

        <section className="about-section">
          <h2 className="about-header" ref={workRef}>Work History</h2>
          <div className="img-container">
            <img className="img" src={plantingDay} alt="Fue planting with volunteers" />
            <caption>Planting in Presidio SF taken by Parks Conservancy</caption>
          </div>
          <article className="about-text">
            <br/><br/>
            Before I became a software engineer I had a career in ecological restoration. I worked closely with local experts and volunteers managing habitats that are home to rare and endemic species.
            <br/><br/>
            My experience in that career really influenced how I see the world and encourages me to work on problems not just effect humans but the world as a whole.
          </article>
        </section>

        <section className="about-section">
          <h2 className="about-header" ref={personalRef}>Personal History</h2>
          <div className="img-container">
            <img className="img" src={familyPhoto} alt="Fue's family when he was a child" />
            <caption>Me on the bottom-left in front of my dad. Two of my older sisters are missing as they've married and started their own families.</caption>
          </div>
          <article className="about-text">
            <br/><br/>
            Born and raised in California's central valley, I'm the youngest of 10. My family immigrated to United States in the late 80's speaking little to no English. I've struggled fitting in growing up but I always had my family and great friends to support me along the way.
            <br/><br/>
            I graduated from the University of California, Merced with a BS in Biology. Learning about life is still facinating to me and I still make time to explore and learn when I can.
          </article>
        </section>

        <section className="about-section">
          <h2 className="about-header" ref={otherRef}>Other</h2>
          <article className="about-text">
            When I'm not coding I love to spend time outdoors. You might find me hiking, bird watching or taking pictures of interesting plants, animals, or fungi. 
            <br/><br/>
            But, more often, you'll find me reading or playing video games with my friends. Video games were what got me interested in technology. I'm excited to see what new things are coming with virtual and augmented reality.
            <br/><br/>
            I'm always looking to learn and grow and figure things out for myself. I like 
          </article>
        </section>
      </section>
    </div>
  )
};

export default About;