import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import MainPage from './containers/MainPage';
import ProfilePage from './containers/ProfilePage';
import Products from './containers/Products';
import CartPage from './containers/CartPage';
import ProductDetails from './containers/ProductDetails';
import PaymentPage from './containers/PaymentPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/products/:category' element={<Products />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
