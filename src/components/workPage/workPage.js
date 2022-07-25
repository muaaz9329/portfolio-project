import React, { useState} from 'react';
import CardGenerator from './cardGenerator';
import ResBuild from './img/resBuild.png'
 const WorkPage=()=>{
  const [visb,setVisib]=useState('invisible')
  const [animate,setAnimate]=useState('')
    const workPage=[{image:ResBuild
    ,data:{title:'Resume builder',para:'This website was developed by me for users to make their resume by just providing information and choosing their favourite design. The whole website is made with React.js and I am currently working to make it responsive',link:'https://resumebuilder-ver1.netlify.app/'}}]
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
    workPage.map((d)=>{
        const data = <div className={`${visb}${animate}`}>
        <CardGenerator image ={d.image} text={d.data}/></div>
        return data;
    })
}
</div>
  </section>)
}

export default WorkPage;