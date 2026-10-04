import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import BeyondCode from './components/BeyondCode'
import Education from './components/Education'
import CurrentlyLearning from './components/CurrentlyLearning'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-dark-bg text-white min-h-screen font-sans selection:bg-electric-blue/30 selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <BeyondCode />
        <Education />
        <CurrentlyLearning />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
