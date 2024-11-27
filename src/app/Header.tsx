import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className=''>
       <nav className="bg-[#080C15] flex justify-center flex-col md:flex-row pt-2 md:justify-around pb-5 text-[#cd292a]">
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