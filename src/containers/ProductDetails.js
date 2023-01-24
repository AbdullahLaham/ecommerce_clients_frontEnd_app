import React, { useEffect } from 'react'
import ReactStars from 'react-rating-stars-component';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { fetchProductDetails } from '../actions/general';
import Header from '../components/Header';
import { ADD_TO_CART } from '../constants';

const ProductDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {product} = useSelector((state) => state?.generalReducer);
    console.log(product, 'oppppppp')
    // dispatch
    const dispatch = useDispatch();
    useEffect(() => {
        // fetch products details
        dispatch(fetchProductDetails(id));
    }, []);
    const addProductToCart = () => {
        dispatch({type: ADD_TO_CART, payload: product});
        navigate('/cart');
    }
  return (
    <>
        <Header />
        <div className='pt-[7rem] flex flex-col lg:flex-row justify-around w-[100%] h-[100vh]'>
            <div className='w-[100%] lg:w-[44%]'>
                <div className='h-[27rem] lg:pt-[3.5rem] border shadow-lg shadow-gray-400  p-[.8rem] rounded-[7px] '>
                    <img src={product?.image} className='w-[25rem] max-h-[25rem] mx-auto -mt-[3rem] ' />
                </div>
            </div>
            <div className='w-[100%] lg:w-[44%]'>
                <p className='text-4xl font-bold  mb-[1rem]'>{product?.name}</p>
                <p className='text-gray-400  mb-[1rem]'>{product?.description}</p>
                <p className='flex mb-[1rem] text-gray-500 '>Availability in stock: {product?.supply > 0 ? <p className='text-green-600 pl-[.5rem]'>Available</p> : <p className='text-green-600'>Not Available</p>}</p>
                <p className='flex mb-[1rem] text-gray-500 font-bold my-[1.5rem]'>Product Category: <p className='text-red-600 pl-[.5rem]'>{product?.category}</p></p>
                <hr />
                <p className='my-[1.5rem]'>
                    <ReactStars
                        count={5}
                        onChange={5}
                        size={24}
                        activeColor="#ffd700"
                        value={product.rating}
                        classNames='pointer-events-none'
                    />
                </p>
                <hr />
                
                <button className='mb-[2rem] w-[100%] h-[2rem] pb-[.8rem] text-center bg-orange-500 text-white' onClick={addProductToCart}>Add To Cart</button>
            </div>
        </div>
        </>
  )
}

export default ProductDetails

