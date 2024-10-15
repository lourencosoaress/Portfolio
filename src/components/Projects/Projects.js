import React, { useState } from 'react';
import './Projects.css';
import { PROJECTS_DATA } from '../../utils/data';
import ProjectCard from './ProjectCard';
import FilterButton from './FilterButton/FilterButton';

const Projects = () => {
  const [items, setItems] = useState(PROJECTS_DATA);
  const menuItems = [...new Set(PROJECTS_DATA.flatMap((val) => val.techs))];

  const filterItems = (cat) => {
    const newItems = PROJECTS_DATA.filter((newval) => newval.techs.includes(cat));
    setItems(newItems);
  };  

  return (
    <div>
      <div id='projects' className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <FilterButton 
        menuItems={menuItems}
        filterItems={filterItems}
        setItems={setItems}
        />
        <div className='project-container'>
          {items.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              techs={project.techs}
              description={project.description}
              viewLink={project.viewLink}
              playLink={project.playLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
