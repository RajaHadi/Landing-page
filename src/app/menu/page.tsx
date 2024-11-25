import React from 'react'
import Card from './card'
import Burger from '../../../public/AndaBurger.jpg'
import Chicken from '../../../public/chicken.jpg'
import Zinger from '../../../public/Zinger.jpg'
const Menu = () => {
  return (
    < div className='w-full bg-[#080C15]'>
        <h1 className='text-center text-[#CD292A] text-3xl font-serif md:text-3xl lg:text-5xl font-extrabold p-2 pb-10'>Our Burgers</h1>
   <div className='flex flex-col pb-10 justify-around md:flex-row sm:flex-row gap-8 pt-4  bg-[#080C15] w-full h-full'>
<Card image={Burger} type="Anda Burger" price="150pkr" />
<Card image={Chicken} type="Chicken Burger" price="250pkr"/>
<Card image={Zinger} type="Zinger Burger" price="330pkr"/>
   </div>
   </div>
  )
}

export default Menu
