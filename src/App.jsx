import React from 'react'
import Navbar from './components/navbar'
import Hero from './section/Hero'
import About from './section/About'
import Instructor from './section/Instructor'
import Student from './section/Student'
import Sponsor from './section/Sponsor'
import Popularcategory from './section/Popularcategory'
import Course from './section/Course'
import Blog from './section/Blog'
import Achivement from './section/Achivement'
import Footer from './components/footer'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Sponsor/>
      <Popularcategory/>
      <Course/>
      <About/>
      <Instructor/>
      <Student/>
      <Blog/>
      <Achivement/>
      <Footer/>
    </div>
  )
}

export default App
