import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import {AiOutlineUser} from 'react-icons/ai';
import {FcLike} from 'react-icons/fc'
import {GiShoppingBag} from 'react-icons/gi';
import Menu from './menu/Menu';
import logo from '../images/logo.png'
const headerItems = [
  {
    name: 'Home'
  },
  {
    name: 'clothing'
  },
  {
    name: 'accessories'
  },
  {
    image: '../images/logo.png'
  },
  {
    name: 'misc'
  },
  {
    name: 'shoes',
  },

]
const Header = () => {
  const [selected, setSelected] = useState(1);
  const [showMenu, setShowMenu] = useState(false);
   return (
    <div className=' hidden lg:flex fixed min-w-[100%] justify-between items-center bg-opacity-80 bg-gray-200 text-gray-500 p-[1.7rem] z-10'>
      <select className='bg-gray-200 border-none outline-none '>
        <option value='English'>English</option>
      </select>
      
      <div className='flex justify-between items-center w-[50rem]'>
        {headerItems.map((item, i) => {
          if (item?.image) {
            return <Link to='/'><img src={logo} className='cursor-pointer' /></Link>
          } else { 
            return <Link to={item?.name == 'Home' ? '/' : `/products/${item.name}`}><p onClick={() => setSelected(i)} className={selected == i ? 'text-red-500 cursor-pointer' : 'cursor-pointer'}>{item.name}</p></Link>
          }
        })}
      </div>
      <div className='text-[#000] flex justify-between items-center w-[6.5rem] cursor-pointer'>
          <div><FcLike className='text-[#fff] ' /></div>
        <div>
          <div onClick={() => setShowMenu(!showMenu)}><AiOutlineUser className='cursor-pointer' /></div>
          {showMenu && <Menu />}
        </div>
        <Link to='/cart'>
          <div className='p-[.6rem] cursor-pointer bg-gray-300 rounded-full text-gray-600 relative'>
            <GiShoppingBag />
            <p className='absolute -top-3 right-1 bg-orange-500 p-[.3rem] rounded-full h-[1rem] flex items-center justify-center text-gray-200'><p>0</p></p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
