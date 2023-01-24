import axios from "axios";

const API = axios.create({ baseURL: 'https://ecommerce-frontend-dashboard.vercel.app/' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return req;
})
 // user functions
export const signup = async (user) => {
    const res = await API.post('/management/signupUser', user);
    return res;
}
export const login = async (user) => {
    const res = await API.post('/management/loginUser', user);
    return res;
}
// system functions
export const getAllProducts = async () => {
    const res = await API.get('/general/getProducts');
    console.log(res);
    return res;
}
export const getCategories = async () => {
    const res = await API.get('/general/getCategories');
    return res;
}
export const getProductsByCategories = async (category) => {
    const res = await API.get(`/general/getCategoryProducts/${category}`);
    return res;
}
export const fetchProductDetails = async (id) => {
    const res = await API.get(`/general/fetchProductDetails/${id}`);
    return res;
}
