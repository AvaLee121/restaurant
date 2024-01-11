import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      {/* wrapper */}
      <div className='w-max flex'>
        {/* single item */}
          {
            featuredProducts.map(item=>(
              <div key={item.id} className='w-screen h-[100vw] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[33vw] md:h-[60vw]'>
              {/* image container */}
              {item.img && <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500 gap-5'>
                <Image 
                  src={item.img} 
                  alt="" 
                  fill 
                  className='object-contain'
                />
              </div>}
              {/* text container */}
              <div className='flex-1 flex flex-col py-8 gap-4 2xl:gap-8 items-center text-center justify-center'>
                <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-4xl'>{item.title}</h1>
                <p className='p-4 2xl:text-2xl 2xl:p-8'>{item.desc}</p>
                <span className='text-xl font-bold xl:text-2xl 2xl:text-4xl'>£ {item.price}</span>
                <button className='bg-red-500 text-white p-2 cursor-pointer rounded-md xl:text-xl 2xl:text-2xl '>Add to Cart</button>
              </div>
            </div>
            )
          )
        }
      </div>
    </div>
  )
}

export default Featured
