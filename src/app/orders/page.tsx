import React from 'react'

const OrderPage = () => {
  return (
    <div className='p-4 lg:p-20 xl:p-40'>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Products</th>
            <th>Status</th>
          </tr>

        </thead>
        <tbody>
          <tr className='text-sm md:text-base odd:bg-red-50'>
            <td className='hidden md:block py-6 px-1'>1234456</td>
            <td className='py-6 px-1'>14/01/2024</td>
            <td className='py-6 px-1'>$13.9</td>
            <td className='hidden md:block py-6 px-1'>Pizza</td>
            <td className='py-6 px-1'>On the way...</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>1234456</td>
            <td className='py-6 px-1'>14/01/2024</td>
            <td className='py-6 px-1'>$13.9</td>
            <td className='hidden md:block py-6 px-1'>Pizza</td>
            <td className='py-6 px-1'>On the way...</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>1234456</td>
            <td className='py-6 px-1'>14/01/2024</td>
            <td className='py-6 px-1'>$13.9</td>
            <td className='hidden md:block py-6 px-1'>Pizza</td>
            <td className='py-6 px-1 font-bold'>On the way...</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrderPage
