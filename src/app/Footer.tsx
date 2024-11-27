import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-400 bg-[#0d1320] body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <p className="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <Image src={"/Burger Logo.png"} alt='Burger' height={100} width={100}/>
      <span className="ml-3 text-[#cd292a] font-serif text-xl ">Rajas Burger Point</span>
    </p>
    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
      © 2024 Raja Development — all rights reserved
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
   
      
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
