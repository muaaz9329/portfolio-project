import React from 'react';
import { Link } from 'react-scroll';
import HomePage from './components/homePage/homePage';
import AboutPage from './components/aboutPage/aboutPage';
import SkillPage from './components/skillPage/skillPage';
import WorkPage from './components/workPage/workPage';
import ContactPage from './components/contactPage/contactPage';
// General scroll to element function




export default function App() {
  return (
    <div className='medFont'>
      <header className="text-gray-400 bg-cusGreen font-poppins">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <button className="flex title-font font-bold items-center text-cusBlue mb-4 md:mb-0 ">
            <span className="ml-3 text-3xl ">MK.</span>
          </button>
          <nav className="md:mr-auto md:ml-4  md:border-gray-700	flex flex-wrap items-center text-base justify-center font-b text-cusBlue">
            <Link to="contact" spy={true} smooth={true} offset={50} duration={800}className="mr-8 ml-1 hover:text-white cursor-pointer" >CONTACT</Link>
            <Link to="about" spy={true} smooth={true} offset={50} duration={800} className="mr-8 hover:text-white cursor-pointer">ABOUT</Link>
            <Link to="work" spy={true} smooth={true} offset={50} duration={800} className="mr-8 hover:text-white cursor-pointer">WORK</Link>
      
          </nav>
        </div>
      </header>
    <HomePage/>
    <AboutPage/>
    <SkillPage/> 
    <WorkPage />
    <ContactPage />
    </div>
  )
}