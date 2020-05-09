import React from 'react';
import './styles/home.css';
import Sun from './assets/sun.jsx';
import Cloud1 from './assets/cloud1.jsx';
import Cloud2 from './assets/cloud2.jsx';

function Home(props) {

  function goToAbout(e) {
    e.preventDefault();
    props.history.push('/about');
  };

  return (
    <div className="home">  
      <article>
        <h2 className="tagline">Building apps to open pathways to <strong className="strong">opportunities, empowerment, and positive impacts</strong></h2>

        {/* <p>
          I'm a software engineer that likes to build cool things and have fun. Before entering the software world, I worked in ecological restoration as a Technician in government and as an Inventory Specialist in a Native Plant Nursery. I love to tackle difficult and interesting problems to hopefully create a positive impact on the world.
        </p>

        <p>
          Read my story <a className="about-link" href="#" onClick={goToAbout}>here</a>.
        </p> */}

        <div className="sky">
          <Cloud1 classes="cloud cloud-1" />
          <Cloud2 classes="cloud cloud-2" />
          <Sun classes="sun" />
          <Cloud1 classes="cloud cloud-3" />
          <Cloud2 classes="cloud cloud-4" />
          <Cloud1 classes="cloud cloud-5" />
        </div>
      </article>
    </div>
  )
};

export default Home;