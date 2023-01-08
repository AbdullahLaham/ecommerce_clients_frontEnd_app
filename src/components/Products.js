import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, getProductsByCategory } from '../actions/general'

const Products = ({ products }) => {
    const [category, setCategory] = useState('clothing');
    // dispatch
    const dispatch = useDispatch();
    // categoryProducts
    const {categoryProducts} = useSelector((state) => state.generalReducer)

    useEffect(() => {
        dispatch(getCategories())
    });
    useEffect(() => {
        dispatch(getProductsByCategory(category));

    }, [category])
    

  return (
    <div>
      
    </div>
  )
}

export default Products
