import React from 'react'
import Image from 'next/image';

const Card = (props:any) => {
  return (
          <> 
      
      <div className='md:w-6/12 lg:w-4/12 mb-10 justify-center gap-2 flex flex-col items-center w-full '>
      <Image className='rounded-md w-52 h-48' src={props.image} alt='andaBurger'  width={200} height={200}/>
      <h3 className='text-white font-semibold'>{props.type}</h3>
      <p className='text-[#CD292A] font-semibold'>Rs:{props.price}</p>



      </div>
    
    </>
  )
}

export default Card;
