import Image from 'next/image'
import React from 'react'
import CountDown from "./CountDown"

const Offer = () => {``
  return (
    <div className="bg-black h-[calc(150vw)] flex flex-col md:flex-row md:h-screen md:justify-between md:bg-[url('/offerBg.png')]">
      {/* text container */}
      <div className='flex-1 text-white flex flex-col text-center items-center justify-center gap-8 p-6'>
        <h1 className='text-5xl font-bold xl:6xl p-4'>Delicious Burger & French Fry</h1>
        <div className='xl:text-xl'>Progressively simplify effective e-toilers and process-centric methods of empowerment. Quickly pontificate parallel.</div>
        {/* <CountDown /> */}
        <button className='bg-red-500 py-3 px-6 cursor-pointer rounded-md'>Order Now</button>
      </div>
      {/* image container */}
      <div className='flex-1 w-full relative md:h-full '>
        <Image src="/offerProduct.png" alt="" fill className='object-contain'/>
      </div>
    </div>
  )
}

export default Offer
