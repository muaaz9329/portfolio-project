import React, { useState} from 'react';
import image from './img/picture.png'
export const HomeContent=()=>{
  const [visb,setVisib]=useState('invisible')
  const [animate,setAnimate]=useState('')
  // <div className={`md:${visb} ${animate} block`}>
  //'animate__animated animate__fadeInUp animate__slow'

    return(
        <section className="text-cusWhite font-poppins bg-cusGreen" onMouseOver={()=>{
          setVisib('visible ')
          setAnimate('animate__animated animate__fadeInUp animate__slow')}} onTouchMove={()=>{
            setVisib('visible ')
            setAnimate('animate__animated animate__fadeInUp animate__slow')}}>
 <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
 <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
 <div className={`${visb} ${animate} `}>        
      <h1 className="title-font sm:text-6xl text-5xl mb-4 font-medium">Muaaz Khan
        <br className="hidden lg:inline-block"></br><div className='sm:text-6xl text-5xl font-bold'>React</div> 
       <div className='sm:text-7xl text-6xl font-bold'>Developer</div> 

      </h1>
      <p className="mb-8 leading-relaxed text-xl">Name is Muaaz khan and I am a front-end developer who build modern-day UI components to improvise application performance.</p>
      </div> </div>
       <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
       <div className={`${visb} ${animate} `}>
       <img className="object-cover object-center rounded-2xl" alt="hero" src={image}/>
       </div>
    </div>
  </div>
</section>
    )
}