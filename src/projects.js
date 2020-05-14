import React, { useRef, useEffect } from 'react';
import './styles/projects.css'
import npsectImg from './assets/nspect.png'
import jumpyKartImg from './assets/jumpykart.png'
import salmonRunImg from './assets/salmonrun.png'
// import tabbyNotes from './TabbyNotes/static'
import WIP from './assets/work-in-progress.gif'

import { ArrowUp, ArrowDown } from './assets/arrows'


const projectList = [{
    title: "Nspect",
    image: npsectImg,
    description: "Nature enthusiasts social networking and knowledge crowdsourcing app. Single page upgrade of iNaturalist.org",
    technologies: "Ruby, Rails5, PostgreSQL, JavaScript, React, Redux, AWS S3, Google Maps API, HTML5, CSS3",
    livelink: "https://n-spect.herokuapp.com/#/",
    github: "https://github.com/FueRobertHer/Nspect"
  },
  {
    title: "Jumpy Kart",
    image: jumpyKartImg,
    description: "Flappy Bird and Mario Kart inspired multiplayer game. Play with friends in unique game rooms. Up to 4 players!",
    technologies: "JavaScript, MongoDB, Express, React, Redux, NodeJS, Axios, Websockets, Canvas",
    livelink: "https://jumpykart.herokuapp.com/#/",
    github: "https://github.com/FueRobertHer/jumpy_kart"
  },
  {
    title: "Salmon Run",
    image: salmonRunImg,
    description: "2D reaction challenge game. Swim, Eat, Grow! ",
    technologies: "Javascript, Canvas",
    livelink: "https://fueroberther.github.io/salmon-run/",
    github: "https://github.com/FueRobertHer/salmon-run"
  },
  {
    title: "TabbyNotes",
    image: WIP,
    description: "Note taking Google Chrome extension. Jot down notes right from your browser. Create as many tabs as you want. Autosaves so you don't have to. And it works offline!",
    technologies: "Javascript, React, React Hooks",
    livelink: "https://chrome.google.com/webstore/detail/tabbynotes/nhonielfcdgaojbfoacndbocgdodbpme",
    github: "https://github.com/FueRobertHer/TabbyNotes"
  },
  {
    title: "EZ KeyCode",
    image: WIP,
    description: "Developer tool Google Chrome extention app. Don't remember keycodes? No worries this app will tell you with a click of a key",
    technologies: "Javascript",
    livelink: "https://chrome.google.com/webstore/detail/ez-keycode/bfgoacblngcjklcmdlniiocjnokngmaa",
    github: "https://github.com/FueRobertHer/EZKeyCode"
  },
  {
    title: "6ft or 6ft",
    image: WIP,
    description: "In progress survival game inspired by COVID-19. How long can you avoid people. Toilet paper can only help you so much...",
    technologies: "Javascript, Canvas",
    livelink: "#",
    github: "https://github.com/FueRobertHer/6ft_or_6ft"
  },
  {
    title: "MyAnimeStats",
    image: WIP,
    description: "In progress MyAnimeList stats analysis app. Using Jikan, an unofficial MyAnimeList API",
    technologies: "Javascript, React, Redux, D3",
    livelink: "#",
    github: "https://github.com/FueRobertHer/my-anime-stats"
  }
];

function Projects() {
  const projects = useRef(document.getElementById("projects"));

  let scrollPos = 0;
  let throttle;
  function fixedScroll(e) {
    e.preventDefault();
    if (throttle) return;

    const prev = (Math.floor(e.target.scrollTop / e.target.offsetHeight)) * e.target.offsetHeight
    const next = prev + e.target.offsetHeight;

    function setScrollandThrottle(newPos) {
      scrollPos = newPos;
      throttle = false;
    };

    if (e.target.scrollTop > scrollPos) {
      // scroll down
      throttle = true
      e.target.scrollTo(0, next)
      setTimeout(() => (setScrollandThrottle(next)), 800);
    } else {
      //scroll up
      throttle = true
      e.target.scrollTo(0, prev)
      setTimeout(() => (setScrollandThrottle(prev)), 800);
    };
  }

  return (
    <div id="projects" ref={projects} onScroll={fixedScroll}>  
      {projectList.map((project, i) => <ProjectItem projects={projects} key={i} idx={i} project={project}/>)}
    </div>
  )
};

function ProjectItem(props) {
  const selfRef = useRef();
  console.log("current",props.projects)

  function scrollToRef(pos) {
    if (pos === "up") {
      props.projects.current.scrollTo(0, selfRef.current.offsetTop - selfRef.current.offsetHeight)
    } else {
      props.projects.current.scrollTo(0, selfRef.current.offsetTop + selfRef.current.offsetHeight)
    };
  };

  function showUpArrow() {
    if (props.idx === 0) return <div></div>;
    return (
      <ArrowUp classes="scroll-up" click={() => scrollToRef("up")} />
    );
  };

  function showDownArrow() {
    if (props.idx === 6) return <div></div>;
    return (
      <ArrowDown classes="scroll-up" click={() => scrollToRef()} />
    );
  };

  return (
    <div className="project-item" ref={selfRef}>
      {showUpArrow()}
      <div className="project-content">
        <h2 className="project-title">{props.project.title}</h2>
        <img className="project-img" src={props.project.image} alt={"project " + props.project.title}/>
        <table>
          <tbody className="table">
            <div className="project-links">
              <a href={props.project.livelink} target="_blank" rel="noopener noreferrer">LIVE</a>
              &ensp; | &ensp;	
              <a href={props.project.github}  target="_blank"  rel="noopener noreferrer">CODE</a>
            </div>

            <div className="project-desc">{props.project.description}</div>

            <code className="tech-list">{props.project.technologies}</code>
          </tbody>
        </table>
      </div>
      {showDownArrow()}
    </div>
  )
}

export default Projects;