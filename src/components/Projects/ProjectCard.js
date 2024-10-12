import React from 'react'
import './Projects.css'

const ProjectCard = (props) => {
  return (
    <div>
                <div className='project-card'>
                    <img src={props.image} alt='image'/>
                    <h2 className='project-title'>{props.title}</h2>
                    <div className='pro-details'>
                        <ul className='pro-techs-container'>
                            <li className='pro-techs-list'>
                                {props.techs.map((techs) => (
                                    <li key={techs}>{techs}</li>
                                ))}
                            </li>
                        </ul>

                        <p>{props.description}</p>
                        <div className='pro-btns'>
                            <a href={props.viewLink} target='_blank' rel='noopener noreferrer'>
                                <button className='btn_check'>Check Code</button>
                            </a>

                            {props.playLink && (
                                <a href={props.playLink}>
                                <button className='btn_play'>Play</button>
                            </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default ProjectCard
