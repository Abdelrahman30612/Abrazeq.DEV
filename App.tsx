import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MatrixBackground from './components/MatrixBackground';
import Scene3D from './components/Scene3D';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative text-white selection:bg-purple-500 selection:text-white">
      {/* Background Layer 1: Matrix Rain */}
      <MatrixBackground />

      {/* Background Layer 2: 3D Elements */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      {/* Foreground Layer: UI Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <footer className="py-8 text-center text-gray-500 text-sm bg-black/80 backdrop-blur-sm border-t border-purple-900/30">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة. تم التصميم والتطوير بشغف.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;