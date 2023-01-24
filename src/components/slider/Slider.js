import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./slider.css";
import ProductItem from "../ProductItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../../actions/general";

export function SSlider() {
  const {categoryProducts} = useSelector((state) => state.generalReducer)
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('clothing');
  const [active, setActive] = useState('clothing');

  const {categories} = useSelector((state) => state?.generalReducer);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getProductsByCategory(category));
  }, [category])


  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    )
  };

  return (
    <>
    <div className="flex w-[100%] justify-between items-center p-[1rem] ">
      <p className="text-2xl font-bold hidden lg:block">FEATCHRED CATEGORIES</p>
      <div className="flex w-auto lg:w-[30%] justify-between items-center">
        {categories?.map((category, i) => {
          return (
            <p onClick={() => {setActive(category); setCategory(category)}} className={active == category ? 'bg-orange-500 text-[#fff] rounded-md p-[.4rem] cursor-pointer transition-all ' : 'cursor-pointer transition-all font-bold'}>
              {category}
            </p>
          )
        })  } 
      </div>
      
    </div>
    <div className="flex flex-col lg:flex-row">
    <div className="flex flex-wrap items-center m-auto ml-[2rem] w-[100%] lg:min-w-[60%] ">
        {categoryProducts?.slice(0,6).map((product, i) => {
          return (
            product.name != "HUAWEI Mate 40 Pro" &&  product._id != "62c2e1ac9fbfe22ca844882f" && 
            <div className="m-auto ">
              <ProductItem product={product} />
            </div>
          )
        })  } 
      </div>
      <div className="spec-card w-[100%] lg:w-auto">
        <div className="categories-wrapper flex">
          <Swiper className=""
            // install Swiper modules
            modules={[Pagination, A11y, Autoplay]}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            
            {categoryProducts?.map((product, i) => {
                return (                    
                      (<SwiperSlide >
                        <p className='bg-orange-400 text-black rounded-md absolute p-[.4rem]  '>SALE -50%</p>
                        <div className="W-[100%] flex justify-center mt-[1.5rem] ">
                          <img className="block mt-[.5rem] w-[60%] max-w-[25rem] overflow-hidden max-h-[27rem]  object-cover" src={product?.image} />
                        </div>
                        <div className="flex items-center w-[100%] justify-between p-[.5rem]">
                          <p className="font-bold text-3xl z-10">{product.name}</p>
                          <p className="text-[#278f34]">{product.price}</p>
                        </div>
                        <div className="flex items-center w-[100%] justify-between p-[.5rem]">
                          <p className="text-gray-400 ">Brand Name</p>
                          <p className="line-through text-green decoration-[#ec4848] text-gray-600">139.000</p>
                        </div>
                    </SwiperSlide>)
                )
              })}
          </Swiper>
      
    
        </div>
      </div>
     
    </div>
     <div className='w-[100%] my-[2.5rem] m-auto flex justify-center items-center h-[3rem]'>
          <Link to={`/products/${category}`} className='text-center w-[13rem] border border-gray-300 rounded-md bg-gray-100 cursor-pointer p-[.3rem] font-semibold'>View More {category}</Link>
      </div>
    </>
  );
}


export default SSlider