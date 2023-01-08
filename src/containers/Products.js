import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import {getProductsByCategory} from '../actions/general'
const Products = () => {
    const {category} = useParams();
    // dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsByCategory(category));
    }, []);
  return (
    <div>
      
    </div>
  )
}

export default Products;
