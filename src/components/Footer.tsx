import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 p-4 lg:p-12 xl:p-24 text-red-500 flex items-center justify-between '>
      <Link href="/" className='font-bold text-xl'>MASSIMO</Link>
      <p>ALL RIGHT RESERVED</p>
    </div>
  )
}

export default Footer
