import React from 'react'
import Card from './card'
import Burger from '../../../public/AndaBurger.jpg'
import Chicken from '../../../public/chicken.jpg'
import Zinger from '../../../public/Zinger.jpg'
import Beef from '../../../public/Beef.jpg'
import BunKabab from '../../../public/bunKabab.jpg'
import ChickEgg from '../../../public/ChickEgg.jpg'
import ChickRoll from '../../../public/ChickRoll.jpg'
import ZingRoll from '../../../public/ZingerRoll.jpg'
import MalaiRoll from '../../../public/MalaiRoll.jpg'
import BeefRoll from '../../../public/BeefRoll.jpg'
import KababRoll from '../../../public/KababRoll.jpg'
import BihariRoll from '../../../public/bihariRoll.jpg'


const Menu = () => {

  return (
    < div className='w-full bg-[#080C15]'>
        <h1 className='text-center text-[#CD292A] text-4xl font-black font-serif md:text-5xl lg:text-5xl pt-6  p-4 mb-4 '>Our Burgers</h1>
   <div className='flex flex-col justify-center md:flex-row flex-wrap pb-10  md:justify-between lg:justify-around  sm:flex-row gap pt-4  bg-[#080C15] w-full h-full'>
<Card image={Burger} type="Anda Burger" price="150pkr" />
<Card image={Chicken} type="Chicken Burger" price="250pkr"/>
<Card image={Zinger} type="Zinger Burger" price="330pkr"/>
<Card image={Beef} type="Beef Burger" price="250pkr"/>
<Card image={BunKabab} type="Bun Kabab" price="100pkr"/>
<Card image={ChickEgg} type="Chicken Anda" price="180pkr"/>
   </div>
   <h1 className='text-center text-[#CD292A] text-4xl font-black font-serif md:text-5xl lg:text-5xl text- pt-[-16px] pb-10'>Our Rolls</h1>
   <div className='flex flex-col justify-center md:flex-row flex-wrap pb-10  md:justify-between lg:justify-around  sm:flex-row gap pt-4  bg-[#080C15] w-full h-full'>
<Card image={ChickRoll} type="Ckicken Roll" price="150pkr" />
<Card image={KababRoll} type="Kabab Roll" price="250pkr"/>
<Card image={ZingRoll} type="Zinger Roll" price="330pkr"/>
<Card image={MalaiRoll} type="Malai Boti Roll" price="250pkr"/>
<Card image={BihariRoll} type="Ckicken Bihari Roll" price="100pkr"/>
<Card image={BeefRoll} type="Beef Roll" price="180pkr"/>
   </div>
   </div>
  )
}

export default Menu
