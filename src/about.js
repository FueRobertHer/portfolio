import React, {useRef} from 'react';
import './styles/about.css'



function About() {
  const about = useRef(document.getElementById("about"))
  console.log(about)
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
          <article>
            Born and raised in the Central Valley of California, I graduated from UC Merced in 2013 with a BS in Biology with an emphasis in ecology and evolution. After college I worked in ecological restoration, doing native plants revegetation and wildlife reintroduction and monitoring in San Francisco. I breifly moved to Oregon and held a position as the Inventory Specialist for a native plant nursery where I developed systems and protocol to improve sales performance and customer relation. I've since relocationed back to San Francisco and am a software engineer, using my skills to build things and do good. 
            {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
          </article>
        </section>

        <section className="about-section">
          <h2 className="about-header" ref={workRef}>Work History</h2>
          <article>
            I most recently held the position as the Inventory Specialist at Scholl's Valley Native Nursery, LLC. located in Forest Groove, Oregon. While there, I managed an inventory of over one million plants and develop a warehouse mangament system to improve warehouse operations. While there I personally oversaw the sales and delivery of over 90% of the products and saw a 94% decrease in mishapes when compared to previous years.
            <br/><br/>
            Prior to that I worked for the Presidio Trust in San Francisco as a Biologial Science Technician. I was in charge of managing the collection, propogation, and reintroduction of native aquatic vegetation into the last remaining natural lake in the Golden Gate National Recreaction Area (GGNRA). In addition to that project I also oversaw the the monitoring and reporting of reintroduced western pond turtles (a threaten species) into that lake and establish a volunteer program around it. I also worked closely with the Wildlife Ecologist, Jonathan Young, to introduce fresh water mussles, damselflys, and frogs into various parts of the Presidio of SF.
            <br/><br/>
            My first introduction to San Fracisco came through an internship with the Presidio that eventually help me get a job with the Presidio Trust.
          </article>
        </section>

        <section className="about-section">
          <h2 className="about-header" ref={personalRef}>Personal History</h2>
          <article>
            {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
          </article>
        </section>

        <section className="about-section">
          <h2 className="about-header" ref={otherRef}>Other</h2>
          <article>
            {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
          </article>
        </section>
      </section>
    </div>
  )
};

export default About;