import React from 'react';
import './styles/projects.css'
import npsectImg from './assets/nspect.png'
import jumpyKartImg from './assets/jumpykart.png'
import salmonRunImg from './assets/salmonrun.png'
// import tabbyNotes from './TabbyNotes/static'
import WIP from './assets/work-in-progress.gif'


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

  return (
    <div className="projects">  
      {projectList.map((project, i) => <ProjectItem key={i} project={project}/>)}
    </div>
  )
};

function ProjectItem(props) {
  return (
    <div className="project-item">
      <h3>{props.project.title}</h3>
      <img className="proj-img" src={props.project.image} alt={"project " + props.project.title}/>
      <table>
        <tbody className="table">
          <tr>
            <th>LINKS:&ensp;</th>
            <td>
              <a href={props.project.livelink} target="_blank" rel="noopener noreferrer">LIVE</a>
              &ensp; | &ensp;	
              <a href={props.project.github}  target="_blank"  rel="noopener noreferrer">CODE</a>
            </td>
          </tr>

          <tr>
            <th>DESC:&ensp;</th>
            <td>{props.project.description}</td>
          </tr>

          <tr>
            <th>TECH:&ensp;</th>
            <td>{props.project.technologies}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Projects;