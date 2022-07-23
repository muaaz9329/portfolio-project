import React, { useState} from 'react';

const AboutPage=({innerRef})=>{
  const [visb,setVisib]=useState('invisible')
  const [animate,setAnimate]=useState('')
    return(
        <section className="text-cusWhite bg-cusBlue font-poppins" ref={innerRef} onMouseEnter={()=>{
          setVisib('visible ')
          setAnimate('animate__animated animate__fadeInUp')}} onTouchMove={()=>{
            setVisib('visible ')
            setAnimate('animate__animated animate__fadeInUp ')}}>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <div className={`${visb}${animate}`}>
      <h1 className="sm:text-3xl text-2xl  title-font mb-4 font-bold">About</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-lg"> I am a hardworking and ambitious individual with a great passion for Computer Science and Designing thats why I have more than a year of Experince in React. I am currently in my second semester of studying BS Computer Science at Khawaja Fareed University Of Engineering and Technology. I have good Programming skills, enabling me to effectively work with React and its eco system. My main Passion is making creative and out of box idea into reality.</p>
      </div>
    </div>
  </div>
</section>
          
    )
}
export default AboutPage