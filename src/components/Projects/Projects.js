import React from 'react'
import './Projects.css'
import { PROJECTS_DATA } from '../../utils/data'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div>
       <div id='projects' className='work-container'>
            <h1 className='project-heading'>Projects</h1>
            <div className='project-container'>
              {PROJECTS_DATA.map((val, ind) => {
                return (
                  <ProjectCard
                  key={ind}
                  image={val.image}
                  title={val.title}
                  techs={val.techs}
                  description={val.description}
                  viewLink={val.viewLink}
                  playLink={val.playLink}
                  />
                )
              })}
            </div>
       </div>
    </div>
  )
}

export default Projects
