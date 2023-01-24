import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import '../slider/slider.css';
import './Products.css';
import { Link } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs';
import { useSelector } from 'react-redux';
const FeaturedProducts = () => {
  // fetching featured products
  const {products} = useSelector((state) => state.generalReducer)
  return (
    <div>
      <div className='flex flex-col justify-between p-[1rem]  m-auto'>
        <h1>FEATCHRED CATEGORIES</h1>
        <Swiper className="slider slider-products items-center flex h-[25rem]"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
        >
        <div className='products-list m-auto' >
        {
            products?.map((product) => {
                    
              return (
              <SwiperSlide>
                <Link to={`/product/${product?._id}`} className=' flex items-center justify-center mt-[2.2rem]'>
                  <div className='w-[10rem] h-[15rem] mb-[8rem] flex flex-col  items-center justify-between '>
                    <img className='w-[10rem] h-[12rem] object-cover' src={product?.image} />
                    <p className="font-bold text-xl z-10">{product.name}</p>
                    <p className="text-orange-500">{product.price}</p>
                    <Link to={`/product/${product._id}`} className='flex items-center justify-between cursor-pointer' >
                      More info <BsArrowRight className='ml-[1rem]' />
                    </Link>
                  </div>
                </Link>
              </SwiperSlide>
              )
            })
          }
        </div>
      </Swiper>
      </div>
    </div>
  )
}

export default FeaturedProducts;
