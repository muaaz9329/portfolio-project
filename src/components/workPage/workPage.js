import React, { useState} from 'react';
import CardGenerator from './cardGenerator';
import { workPage } from '../ChangesCreator/changes';
 const WorkPage=()=>{
  const [visb,setVisib]=useState('invisible')
  const [animate,setAnimate]=useState('')

    return(<section className="bg-cusBlue font-poppins text-cusWhite"  id="work" onMouseEnter={()=>{
      setVisib('visible ')
      setAnimate('animate__animated animate__fadeInUp ')}}
      onTouchMove={()=>{
        setVisib('visible ')
        setAnimate('animate__animated animate__fadeInUp')}}>
        <div className=' px-5 py-24 mx-auto'>
        <div className="flex flex-col text-center w-full mb-20">
          <div className={`${visb}${animate}`}>
      <h1 className="sm:text-5xl text-6xl font-bold title-font mb-4 text-gray-900">Work</h1> </div>   </div>
    {
    workPage.map((d,index)=>{
        const data = <div className={`${visb}${animate}`} key={d.id}>
        <CardGenerator data={d} id={index}/></div>
        return data;
    })
}
</div>
  </section>)
}

export default WorkPage;