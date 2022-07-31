import React from 'react';
const CardGenerator = (props)=>{
    const id=props.id
    const {title,para,link,image} = props.data
    var Card;
    
 
 
 
 
 
 const EvenCard = <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center rounded-lg" key={title}>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-2xl" key={image}>
      <a href={link} target="_blank" rel="noreferrer">  <img className="object-cover object-center  shadow-2xl rounded transition-all duration-700 hover:scale-110" alt="hero" src={image} /></a>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-center items-center text-center md:-mb-6" key={para}>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{title}
      </h1>
      <p className="mb-8 leading-relaxed">{para}</p>
    </div>
  </div>;





  const OddCard = <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center rounded-lg" key={title}>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-2xl block md:hidden" key={image}>
      <a href={link} target="_blank" rel="noreferrer">  <img className="object-cover object-center  shadow-2xl rounded transition-all hover:scale-110" alt="hero" src={image} /></a>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-center items-center text-center md:-mb-6" key={para}>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{title}
      </h1>
      <p className="mb-8 leading-relaxed">{para}</p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-2xl hidden md:block" key={image}>
      <a href={link} target="_blank" rel="noreferrer">  <img className="object-cover object-center  shadow-2xl rounded transition-all hover:scale-110" alt="hero" src={image} /></a>
    </div>
  </div>;




  id%2===0?Card=EvenCard:Card=OddCard;
    return(
      Card
      )
      
}
export default CardGenerator;