import React from 'react'
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <div className='flex justify-center py-[1rem] border-t-2 border-b-2 border-t-gray-300 border-b-gray-300 text-gray-600 '>
      <div className='flex flex-col lg:flex-row justify-between w-[85%] '>
        <div className='flex flex-col h-[10rem] justify-around w-[100%] lg:w-auto'>
          <img className='w-[10rem] m-auto' src={logo} />
          <p className='w-[20rem] text-[.9rem] m-auto'>teck store is an online market to sell all the types of the electronic devices like phones , laptops, Ipdas and so on.</p>
        </div>
        <div className='justify-between flex flex-col lg:flex-row text-[.9rem]'>
          <div className='w-[100%] lg:w-auto flex m-auto'>
            <div className='flex flex-col  lg:w-[11rem] w-[100%]  justify-between'>
              <p className='font-bold'>Home</p>
              <p>Featured Categories</p>
              <p>Featured Products menu</p>
              <p>offers</p>
            </div>
            <div className='flex  flex-col lg:w-[11rem] w-[100%]  justify-between'>
              <p className='font-bold'>Menu</p>
              <p>Home</p>
              <p>New arrival</p>
              <p className=''>Mobiles</p>
            </div>
            <div className='flex flex-col  lg:w-[11rem] w-[100%]  justify-between'>
              <p className='font-bold'>Menu </p>
              <p>Laptops</p>
              <p>Headphones</p>
              <p>Accessories</p>
            </div>
          </div>
          <div className='lg:mt-0 mt-[.5rem]'>
            <div className='flex  flex-col  lg:w-[11rem] w-[100%]  justify-between'>
              <p className='font-bold'>Contacts</p>
              <p>Fell free get in touch with us via phone or send us a message</p>
              <p><a href='https://wa.me/+972592311426'>+972592311426</a></p>
              <p><a href='https://m.me/100003602820747'>abed26194@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Footer
