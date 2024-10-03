import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
    <Navbar />
    <div className='container'>
      <Hero />
      <WorkExperience />
      <Projects />
    </div>
    </>
  );
}

export default App;