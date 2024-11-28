import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ThemeToggle from './components/ThemeToggle';
import Education from './components/Education';
import './styles/theme.css';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <div className="content-wrapper">
          <Hero />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;