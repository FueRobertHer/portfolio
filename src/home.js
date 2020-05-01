import React from 'react';
import './styles/home.css'

function Home(props) {

  function goToAbout(e) {
    e.preventDefault();
    props.history.push('/about');
  };

  return (
    <div className="home">  
      <h1>Hi, I'm Fue</h1>
      
      <article>
        <p>
          Welcome to my site. Feel free to look around and learn about me.
        </p>

        <p>
          I'm a software engineer that likes to build cool things and have fun. Before entering the software world, I worked in ecological restoration as a Technician in government and as an Inventory Specialist in a Native Plant Nursery. I love to tackle difficult and interesting problems to hopefully create a positive impact on the world.
        </p>

        <p>
          Read my story <a className="about-link" href="#" onClick={goToAbout}>here</a>.
        </p>
      </article>
    </div>
  )
};

export default Home;