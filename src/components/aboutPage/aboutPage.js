import React, { useState} from 'react';
import { aboutData } from '../ChangesCreator/changes';

const AboutPage=()=>{
  const [visb,setVisib]=useState('invisible')
  const [animate,setAnimate]=useState('')
    return(
        <section className="text-cusWhite bg-cusBlue font-poppins" id='about' onMouseEnter={()=>{
          setVisib('visible ')
          setAnimate('animate__animated animate__fadeInUp')}} onTouchMove={()=>{
            setVisib('visible ')
            setAnimate('animate__animated animate__fadeInUp ')}}>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <div className={`${visb}${animate}`}>
      <h1 className="sm:text-3xl text-2xl  title-font mb-4 font-bold">About</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">{aboutData}</p>
      </div>
    </div>
  </div>
</section>
          
    )
}
export default AboutPage