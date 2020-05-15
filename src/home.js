import React from 'react';
import './styles/home.css';
import Sun from './assets/sun';
import Rays from './assets/rays'
import Cloud1 from './assets/cloud1';
import Cloud2 from './assets/cloud2';

function Home(props) {

  return (
    <div className="home">  
        <h2 className="tagline">Building apps to open pathways to <strong className="strong">opportunities, empowerment, and positive impacts</strong></h2>

      <div className="sky">
        <div className="sky-center">
          <Rays classes="rays" />
        </div>
        <div className="sky-center">
          <Cloud1 classes="cloud cloud-1" />
          <Cloud2 classes="cloud cloud-2" />
          <Sun classes="sun" />
          <Cloud1 classes="cloud cloud-3" />
          <Cloud2 classes="cloud cloud-4" />
          <Cloud1 classes="cloud cloud-5" />
        </div>

      </div>
    </div>
  )
};

export default Home;