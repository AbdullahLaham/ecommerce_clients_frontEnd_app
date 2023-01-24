import React from 'react'
import './nav.css';
import navImage from '../../images/nav.png'
const Nav = () => {
  return (
    <div className='navbar relative'>
      <div className=" flex items-center justify-between  my-auto h-full mx-[10rem] text-[#fff] ">
        <p className='text-3xl '>Get 50% Off</p>
        <button className='border border-gray-400 text-gray-200 hover:bg-orange-600 cursor-pointer p-[.5rem] '>Start Shopping</button>
        <img src={navImage} className='w-[100%] h-[100%] absolute top-0 left-0 right-0 bottom-0 -z-[1]' />
      </div>
    </div>
  )
}

export default Nav;