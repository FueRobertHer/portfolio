import React, { useRef } from 'react';
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
    description: "Nspect is a social networking app to encourage people to connect with their environment as well as others around the world. Users can post pictures of something that they're interested in and through the collective community learn more about the world around them",
    technologies: "Ruby, Rails5, PostgreSQL, JavaScript, React, Redux, Google Maps API, HTML5, CSS3",
    livelink: "https://n-spect.herokuapp.com/#/",
    github: "https://github.com/FueRobertHer/Nspect"
  },
  {
    title: "Jumpy Kart",
    image: jumpyKartImg,
    description: "JumpyKart is ...",
    technologies: "JavaScript, MongoDB, Express, React, Redux, NodeJS, Websockets, Canvas",
    livelink: "https://jumpykart.herokuapp.com/#/",
    github: "https://github.com/FueRobertHer/jumpy_kart"
  },
  {
    title: "Salmon Run",
    image: salmonRunImg,
    description: "Salmon RUn is....",
    technologies: "Javascript, Canvas",
    livelink: "https://fueroberther.github.io/salmon-run/",
    github: "https://github.com/FueRobertHer/salmon-run"
  },
  {
    title: "TabbyNotes",
    image: WIP,
    description: "TabbyNotes is ...",
    technologies: "Javascript, React",
    livelink: "https://chrome.google.com/webstore/detail/tabbynotes/nhonielfcdgaojbfoacndbocgdodbpme",
    github: "https://github.com/FueRobertHer/TabbyNotes"
  },
  {
    title: "EZ KeyCode",
    image: WIP,
    description: "",
    technologies: "Javascript",
    livelink: "https://chrome.google.com/webstore/detail/ez-keycode/bfgoacblngcjklcmdlniiocjnokngmaa",
    github: "https://github.com/FueRobertHer/EZKeyCode"
  },
  {
    title: "6ft or 6ft",
    image: WIP,
    description: "",
    technologies: "Javascript, Canvas",
    github: "https://github.com/FueRobertHer/6ft_or_6ft"
  }
];

function Projects() {
  const projects = useRef(document.getElementById("projects"));
  console.log('pro',projects)

  return (
    <div id="projects" ref={projects}>  
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
    if (props.idx === 5) return <div></div>;
    return (
      <ArrowDown classes="scroll-up" click={() => scrollToRef()} />
    );
  };

  return (
    <div className="project-item" ref={selfRef}>
      {showUpArrow()}
      <div className="project-content">
        <h3>{props.project.title}</h3>
        <img className="proj-img" src={props.project.image} alt={"project " + props.project.title}/>
        <table>
          <tbody className="table">
            <div className="project-links">
              <a href={props.project.livelink} target="_blank" rel="noopener noreferrer">LIVE</a>
              &ensp; | &ensp;	
              <a href={props.project.github}  target="_blank"  rel="noopener noreferrer">CODE</a>
            </div>

            <div>{props.project.description}</div>

            <div>{props.project.technologies}</div>
          </tbody>
        </table>
      </div>
      {showDownArrow()}
    </div>
  )
}

export default Projects;