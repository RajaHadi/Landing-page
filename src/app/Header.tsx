import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className=''>
       <nav className="bg-[#080C15] pb-7 md:pb-0 flex justify-center items-center flex-col md:flex-row pt-2 md:justify-around  text-[#cd292a]">
       <Image  src={"/Burger Logo.png"} alt='Burger' height={100} width={100}/>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold font-sans pt-2">
          RAJAs BURGER POINT
        </h1>
        <ul className="flex justify-center mt-3 items-center gap-8 flex-wrap">
          <li>
            <Link href={"/menu"}><button className="rounded-3xl text-[#CD292A] md:font-semibold bg-white w-32  ">Menu</button></Link>
          </li>
          <li>
            <Link href={"/contact"}><button className="rounded-3xl bg-[#CD292A] md:font-semibold text-white w-32  ">Contact Us</button></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
