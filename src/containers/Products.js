import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {getProductsByCategory} from '../actions/general'
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem'
import ProductDetails from './ProductDetails';
const Products = () => {
    const {category} = useParams();
    const {categoryProducts} = useSelector((state) => state?.generalReducer);
    console.log('oooooooo',categoryProducts)
    // dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsByCategory(category));
    }, [category]);
  return (
    <div>
      <Header />
      <div className='w-[85%] pt-[7rem] m-auto'>
        <p className='w-[100%] text-start flex items-center text-2xl uppercase'><p className=' text-orange-600 mr-[.5rem]'>{category}</p> products </p>
        <div className=' flex flex-wrap items-center justify-between'>
          {categoryProducts?.map((product) => {
            return <div className='w-[13rem]'>
              <ProductItem product={product} />
            </div>
          })}
        </div>

      </div>
      
      <Footer />
    </div>
  )
}

export default Products;
