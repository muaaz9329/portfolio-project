import React, { useState, useEffect } from 'react';
export const  NavBar=()=>{
    return(
        <header className="text-gray-400 bg-cusGreen font-poppins">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-bold items-center text-cusBlue mb-4 md:mb-0">
            <span className="ml-3 text-3xl ">MK.</span>
          </a>
          <nav className="md:mr-auto md:ml-4  md:border-gray-700	flex flex-wrap items-center text-base justify-center font-b text-cusBlue">
            <a className="mr-8 ml-8 hover:text-white">CONTACT</a>
            <a className="mr-8 hover:text-white">ABOUT</a>
            <a className="mr-8 hover:text-white">WORK</a>
      
          </nav>
        </div>
      </header>
    )
}