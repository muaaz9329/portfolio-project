import React, { useState } from 'react';
import { SkillAdd } from '../ChangesCreator/changes';
import SkillCard from './skillcard';


const SkillPage = () => {
  const [visb, setVisib] = useState('invisible')
  const [animate, setAnimate] = useState('')
  return (
    <section className="text-gray-600 font-poppins bg-cusGreen text-cusWhite" onMouseEnter={() => {
      setVisib('visible ')
      setAnimate('animate__animated animate__fadeInUp')
    }} onTouchMove={() => {
      setVisib('visible ')
      setAnimate('animate__animated animate__fadeInUp ')
    }}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className={`${visb}${animate}`}>
            <h1 className="sm:text-5xl text-6xl font-bold title-font mb-4 text-gray-900">Skills</h1> </div>   </div>
        <div className="flex flex-wrap -m-4">
        {SkillAdd.map((d)=>{
           return <SkillCard visb={visb} animate={animate} image={d}/>
          })
          
          }
          
          
          
        </div>
      </div>
    </section>
  )
}
export default SkillPage;