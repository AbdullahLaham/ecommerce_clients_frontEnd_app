
import * as api from '../api'
import {CATEGORY_PRODUCTS, CATEGORIES, ALL_PRODUCTS, CURRENT_PRODUCT} from '../constants'

export const fetchAllProducts = () => async (dispatch) => {
    const {data} = await api.getAllProducts();
    dispatch({type: ALL_PRODUCTS, payload: data});
}

export const getCategories = () => async (dispatch) => {
    const {data: {data}} = await api.getCategories();
    dispatch({type: CATEGORIES, payload: data});
}

export const getProductsByCategory = (category) =>  async (dispatch) => {
    const {data} = await api.getProductsByCategories(category);
    console.log('datafffff', data);
    dispatch({type: CATEGORY_PRODUCTS, payload: data});
}
// fetch Product Details using its ID
export const fetchProductDetails = (id) => async (dispatch) => {
    console.log('hello')
    const {data} = await api.fetchProductDetails(id);
    dispatch({type: CURRENT_PRODUCT, payload: data});
}
