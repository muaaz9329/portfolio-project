import React, { useState} from 'react';
import image1 from './imgs/gr1.png'
import image2 from './imgs/gr2.png'
import image3 from './imgs/gr3.png'
import image4 from './imgs/gr4.png'
import image5 from './imgs/gr5.png'
import image6 from './imgs/gr6.png'
const SkillPage=()=>{
  const [visb,setVisib]=useState('invisible')
  const [animate,setAnimate]=useState('')
    return(
        <section className="text-gray-600 font-poppins bg-cusGreen text-cusWhite" onMouseEnter={()=>{
          setVisib('visible ')
          setAnimate('animate__animated animate__fadeInUp')}}   onTouchMove={()=>{
            setVisib('visible ')
            setAnimate('animate__animated animate__fadeInUp ')}}>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
    <div className={`${visb}${animate}`}>
      <h1 className="sm:text-5xl text-6xl font-bold title-font mb-4 text-gray-900">Skills</h1> </div>   </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <div className={`${visb}${animate}`}>
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl" src={image1}></img>
          <div className="px-8 py-10 relative z-10 w-full border-4  border-cusBlue bg-cusBlue rounded-3xl opacity-0 hover:opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <div className={`${visb}${animate}`}>
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl" src={image2}></img>
          <div className="px-8 py-10 relative z-10 w-full border-4  border-cusBlue bg-cusBlue rounded-3xl opacity-0 hover:opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <div className={`${visb}${animate}`}>
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl" src={image3}></img>
          <div className="px-8 py-10 relative z-10 w-full border-4  border-cusBlue bg-cusBlue rounded-3xl opacity-0 hover:opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <div className={`${visb}${animate}`}>
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl" src={image4}></img>
          <div className="px-8 py-10 relative z-10 w-full border-4  border-cusBlue bg-cusBlue rounded-3xl opacity-0 hover:opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <div className={`${visb}${animate}`}>
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl " src={image5}></img>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-cusBlue bg-cusBlue rounded-3xl opacity-0  hover:opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <div className={`${visb}${animate}`}>
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl" src={image6}></img>
          <div className="px-8 py-10 relative z-10 w-full border-4  border-cusBlue bg-cusBlue rounded-3xl opacity-0 hover:opacity-0">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}
export default SkillPage;