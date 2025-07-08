import React from 'react'
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonial />
      <Contact />
    </div>
  )
}

export default App; 