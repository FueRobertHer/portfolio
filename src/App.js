import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import './styles/App.css';
import './styles/animate.css';

import Sidebar from './sidebar'
import Home from './home';
import Projects from './projects';
import Skills from './skills';
import About from './about';
import Contact from './contact';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <div>
          <Route path="/" component={Sidebar} /> 
        </div>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} /> 
          <Route path="/skills" component={Skills} /> 
          <Route path="/about" component={About} /> 
          <Route path="/contact" component={Contact} /> 
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
