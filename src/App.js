import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
  return (
    <div className='overflow-x-hidden bg-white text-neutral-700 antialiased'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        {/* Light background with subtle radial gradient */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(160,160,255,0.1),rgba(255,255,255,0))]"></div>
      </div>

      <div className="w-full min-h-screen font-poppins">
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <Navbar />

          <div className="flex flex-col items-center">
            <Hero />
            <About />
            <Skills />
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
