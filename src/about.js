import React, {useRef, useEffect} from 'react';
import './styles/about.css'



function About() {
  let overviewRef = useRef(null)
  const workRef = useRef(null)
  const personalRef = useRef(null)
  let hobbiesRef = useRef(null)

  let about = document.getElementById('mainabout')
  useEffect(() => {
    about = document.getElementById('mainabout')

  })
  const scrollToRef = (ref) => about.scrollTo(0, ref.current.offsetTop - 100)


  return (
    <div id='mainabout' className="about">  
      <div className="about-nav">
        <ul className="about-nav-list">
          <li onClick={() => scrollToRef(overviewRef)}>OVERVIEW</li>
          <li onClick={() => scrollToRef(workRef)}>WORK HISTORY</li>
          <li onClick={() => scrollToRef(personalRef)}>PERSONAL HISTORY</li>
          <li onClick={() => scrollToRef(hobbiesRef)}>HOBBIES</li>
        </ul>
      </div>
      
      <section className="about-body">
        <section>
          <h2 ref={overviewRef}>OVERVIEW</h2>
          <article>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </article>
        </section>

        <section>
          <h2 ref={workRef}>WORK HISTORY</h2>
          <article>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </article>
        </section>

        <section>
          <h2 ref={personalRef}>PERSONAL HISTORY</h2>
          <article>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </article>
        </section>

        <section>
          <h2 ref={hobbiesRef}>HOBBIES</h2>
          <article>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </article>
        </section>
      </section>
    </div>
  )
};

export default About;