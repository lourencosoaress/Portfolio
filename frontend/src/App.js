import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Projects from './components/Projects/Projects';

import { Routes, Route } from "react-router-dom";
import LinkShortener from './components/Projects/ProjectsItems/LS/LinkShortener';
import BookingSimulator from './components/Projects/ProjectsItems/BS/BookingSimulator';

function App() {
  return (
    <>
    <Navbar />

    <Routes>
      <Route exact path='/' element= {
        <div className='app-container'>
          <Hero/>
          <WorkExperience/>
          <Projects/>
       </div>
      }/>

      <Route path='/link-shortener' element={<LinkShortener/>}/>
      <Route path='/booking-simulator' element={<BookingSimulator/>}/>
    </Routes>
    
    </>
  );
}

export default App;