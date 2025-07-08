import React from 'react'
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Testimonial from './Components/Testimonial';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <About />
      <Projects />
      <Testimonial />
    </div>
  )
}

export default App; 