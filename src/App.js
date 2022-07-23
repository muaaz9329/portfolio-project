import React from 'react';
import HomePage from './components/homePage/homePage';
import AboutPage from './components/aboutPage/aboutPage';
import SkillPage from './components/skillPage/skillPage';
import WorkPage from './components/workPage/workPage';
import ContactPage from './components/contactPage/contactPage';
import  { useRef } from 'react'   
// General scroll to element function




export default function App() {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const myRef = useRef(null)
   const executeScroll = () => scrollToRef(myRef)
   const myRef2 = useRef(null)
   const executeScroll2 = () => scrollToRef(myRef2)
   const myRef3 = useRef(null)
   const executeScroll3 = () => scrollToRef(myRef3)
  return (
    <div className='medFont'>
      <header className="text-gray-400 bg-cusGreen font-poppins">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <button className="flex title-font font-bold items-center text-cusBlue mb-4 md:mb-0 ">
            <span className="ml-3 text-3xl ">MK.</span>
          </button>
          <nav className="md:mr-auto md:ml-4  md:border-gray-700	flex flex-wrap items-center text-base justify-center font-b text-cusBlue">
            <button className="mr-8 ml-1 hover:text-white" onClick={executeScroll}>CONTACT</button>
            <button className="mr-8 hover:text-white"onClick={executeScroll2}>ABOUT</button>
            <button className="mr-8 hover:text-white"onClick={executeScroll3}>WORK</button>
      
          </nav>
        </div>
      </header>
    <HomePage/>
    <AboutPage innerRef={myRef2}/>
    <SkillPage/> 
    <WorkPage innerRef={myRef3}/>
    <ContactPage innerRef={myRef}/>
    </div>
  )
}