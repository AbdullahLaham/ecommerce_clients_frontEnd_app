import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, getProductsByCategory } from '../actions/general';
import FeaturedProducts from './featchered/FeaturedProducts';
import Nav from './nav/Nav'
import SSlider from './slider/Slider';


const Products = () => {
    // dispatch
    const dispatch = useDispatch();
    // categoryProducts
    const {categoryProducts} = useSelector((state) => state.generalReducer)
    console.log('categ', categoryProducts);
    useEffect(() => {
        dispatch(getCategories());
    });
  return (
    <div>
      <SSlider />
      <Nav />
      <FeaturedProducts />
    </div>
  )
}

export default Products
