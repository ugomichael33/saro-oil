import React from 'react'
import './App.css';
import Header from './Header'
import Services from './Services'
import Contact from './Contact'
import About from './About'
import LearnMore from './LearnMore'
import Intro from './Intro'
import Footer from './Footer'
import Main from './Main'

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Intro />
      <Services />
      <About />
      <LearnMore />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
