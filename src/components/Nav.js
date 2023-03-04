import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Nav = () => {
  const { amount } = useSelector((state) => state.cart)
  return (
    <div className='bg-gray-800'>
    <div className="px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className='className="absolute inset-y-0 left-0 flex items-center sm:hidden"'>
        <Link to='/' >
            <button className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'>Home</button>
        </Link>
        <Link to='/signup'>
            <button className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'>signup</button>
        </Link>
        <Link to='/login'>
            <button className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'>Login</button>
        </Link>
        <div>
          <h4>{amount}</h4>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Nav