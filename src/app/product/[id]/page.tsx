import Image from 'next/image'
import React from 'react'
import {pizzas} from '@/data'

const SingleProduct = () => {
  return (
    <div className=''>

      {pizzas.map(item=>(
      <div className=''>
        {/* img container */}
        {item.img && <div className=''>
          <Image src={''} alt={''}>{item.img}</Image>
        </div>}
        {/* text container */}
        <div className=''>
          <h1 className=''>{item.title}</h1>
          <p className=''>{item.price}</p>
          {item.options && item.options.map(option=>(
            <span className=''>{option}</span>
          ))}
          <button className=''>Add to Cart</button>
        </div>

      </div>
      ))}

    </div>
  )
}

export default SingleProduct
