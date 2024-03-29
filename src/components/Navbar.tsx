import Link from 'next/link'
import Menu from './Menu'
import React from 'react'
import CartIcon from './CartIcon';
import Image from 'next/image';
import UserLinks from './UserLinks';

const Navbar = () => {

  const user = false;

  return (
    <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
      {/* left links */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* logo */}
      <div className='text-xl font-bold flex-1 md:text-center'>
        <Link href="/">
          Massimo
        </Link>
      </div> 
      {/* mobile menu */}
      <div className='md:hidden'>
        <Menu />
      </div>
       {/* right links */}
      <div className='hidden md:flex gap-8 items-center justify-end flex-1'>
        <div className='md:absolute lg:static flex items-center gap-1 cursor-pointer bg-orange-300 px-2 rounded-md'>
          <Image src="/phone.png" width={15} height={15} alt={''}/>
          <span className='bg-orange-300 rounded-md px-1 relative'>0892676871</span>
        </div>
        <UserLinks/>
        <CartIcon/>
      </div>
    </div>
  )
}

export default Navbar
