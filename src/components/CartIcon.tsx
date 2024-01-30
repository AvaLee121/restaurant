import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const CartIcon = () => {
  return (
    <div>

      <Link href="/cart" className='flex items-center gap-2'>
        <div className='relative w-8 h-8 md:w-5 md:h-5'>
            <Image src="/cart.png" alt="" fill/>
        </div>
        <div>Cart(3)</div>
      </Link>
      
    </div>
  )
}

export default CartIcon
