import React from 'react';
const CardGenerator = (props)=>{
    const image = props.image
    const {title,para,link} = props.text
    return(    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center rounded-lg" key={title}>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 rounded-2xl" key={image}>
    <a href={link} target="_blank" rel="noreferrer">  <img className="object-cover object-center  shadow-2xl rounded-2xl" alt="hero" src={image}/></a>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center" key={para}>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{title}
      </h1>
      <p className="mb-8 leading-relaxed">{para}</p>
    </div>
  </div>)
}
export default CardGenerator;