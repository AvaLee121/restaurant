import { featuredProducts } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 md:flex-row'>
      {/* product list container */}
      <div className='h-1/2 p-4 flex flex-col'>
        <div className='flex items-center justify-between mb-4'>
          <Image src={'/temporary/p1.png'} alt={''} width={50} height={50}/>
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>title</h1>
            <span>size</span>
          </div>
          <h2 className='font-bold'>price</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        <div className='flex items-center justify-between mb-4'>
          <Image src={'/temporary/p1.png'} alt={''} width={50} height={50}/>
          <div>
            <h1 className='uppercase text-xl font-bold'>title</h1>
            <span>size</span>
          </div>
          <h2 className='font-bold'>price</h2>
          <span className='cursor-pointer'>X</span>
        </div>
      </div>
      {/* checkout container */}
      <div className='h-1/2 p-4 gap-1 bg-fuchsia-50 flex flex-col justify-center'>
        <div className='flex justify-between'>
          <span>Subtotal ({}items)</span>
          <span>price</span>
        </div>
        <div className='flex justify-between'>
          <span>Service Cost</span>
          <span>price</span>
        </div>
        <div className='flex justify-between'>
          <span>Delivery Cost</span>
          <span className='text-green-500'>price</span>
        </div>
        <hr className='my-2'/>
        <div className='flex justify-between'>
          <span>Total Number</span>
          <span className='font-bold'>price</span>
        </div>
        <button className='bg-red-500 p-2 rounded-sm w-1/2 self-end text-white '>CHECKOUT</button>

      </div>
    </div>
  )
}

export default CartPage
