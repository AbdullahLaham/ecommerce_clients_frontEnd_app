import {  ADD_TO_CART, DELETE_FROM_CART, UPDATE_CART_ITEM, TRANSACTION, ALL_PRODUCTS } from "../constants";
const reducer = (state={ 
        cart: JSON.parse(localStorage.getItem('cart')),
        transaction: null,
        products: JSON.parse(localStorage.getItem('products'))},
        action
    ) => {
    switch(action.type) {
        case  ADD_TO_CART: {
            let item = action.payload;
            return {...state, cart: [...state?.cart, item]}
        }
        case DELETE_FROM_CART: {
            let item = action.payload;
            const newCart = state.cart.map((prod) => prod.name == item.name ? item : prod);
            localStorage.setItem('cart', JSON.stringify(newCart));
            return {...state, authData: null}
        }
        case UPDATE_CART_ITEM: {
            let item = action.payload;
            const newCart = state.cart.map((prod) => prod.name == item.name ? item : prod);
            localStorage.setItem('cart', JSON.stringify(newCart));
            return {...state, cart: newCart}
        }
        case TRANSACTION: {
            localStorage.setItem('cart', null);
            return {...state, transaction: action?.payload};
        }
        case ALL_PRODUCTS: {
            localStorage.setItem('products', JSON.stringify(action?.payload));
            return {...state, products: action?.payload};
        }
        default: {
            return state;
        }
    }
}
export default reducer;
