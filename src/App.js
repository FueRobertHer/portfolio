
import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import logo from './assets/logo.svg';
import './styles/App.css';

import Splash from './splash'
import Home from './home';
import Projects from './projects';
import Skills from './skills';
import Contact from './contact'


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Route path="/" component={Splash} /> 
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} /> 
          <Route path="/skills" component={Skills} /> 
          <Route path="/contact" component={Contact} /> 
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
