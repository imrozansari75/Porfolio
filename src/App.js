import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';
import Trash from './components/Trash';

function App() {
  return (
    <div className='overflow-x-hidden bg-white text-neutral-700 antialiased'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        {/* Light background with subtle radial gradient */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(160,160,255,0.1),rgba(255,255,255,0))]"></div>
      </div>

      <Navbar />

      <div className="min-h-screen w-full flex items-center justify-center">
        {/* Container for all sections with consistent width */}
        <div className="w-full max-w-8xl px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Project />
          {/* <Contact /> */}
        </div>
      </div>
    </div>
  );
}

export default App;