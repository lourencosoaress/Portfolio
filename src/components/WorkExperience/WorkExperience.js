import React, { useRef } from 'react';
import './WorkExperience.css';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import { WORK_EXPERIENCE } from "../../utils/data";
import Slider from "react-slick";

const WorkExperience = () => {

    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    }

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    }

  return (
    
    <section id='work-experience' className='experience-container'>
        <h1>Work Experience</h1>

        <div className='experience-content'>
            <div className='arrow-right' onClick={slideRight}>
                <span className='material-symbols-outlined'>chevron_right</span>
            </div>

            <div className='arrow-left' onClick={slideLeft}>
                <span className='material-symbols-outlined'>chevron_left</span>
            </div>

            <Slider ref={sliderRef} {...settings}>
            {WORK_EXPERIENCE.map((item) => (
                <ExperienceCard key={item.title} details={item} />
            ))}
            </Slider>
        </div>
    </section>
  )
}

export default WorkExperience
