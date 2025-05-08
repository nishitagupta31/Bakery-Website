import React from 'react';
import Home from './home';
import Login from './login';
import Signup from './signup';
import Cart from './cart';
import Product from './product';
import ProductDetail from './product_detail';
import Contact from './contact';
import About from './about';
import { Routes, Route } from 'react-router-dom';

const Rout = ({ 
  setCartData, 
  cartData, 
  cart, 
  authState, 
  setAuthState, 
  detail, 
  showDetail, 
  setShowDetail, 
  getDetails 
}) => {

  return (
    <Routes>
      <Route path='/' element={<Home cart={cart} detail={detail} getDetails={getDetails} showDetail={showDetail} setShowDetail={setShowDetail} />} />
      <Route path='/login' 
        element={
          <Login 
            authState={authState} 
            setAuthState={setAuthState} 
          /> 
        } 
      />
      <Route path='/cart' 
        element={
          <Cart 
            setCartData={setCartData} 
            cartData={cartData} 
          />
        } 
      />
      <Route path='/signup' 
        element={
          <Signup 
            authState={authState} 
            setAuthState={setAuthState} 
          />
        } 
      />
<Route path='/product' element={
    <Product  
        cart={cart} 
        getDetails={getDetails} 
        showDetail={showDetail} 
        detail={detail} 
        setShowDetail={setShowDetail} 
    />
}/>
{/* Add this new route for product details */}
<Route path='/product/:id' element={
        <ProductDetail 
          setShowDetail={setShowDetail} 
          detail={detail}
          cart={cart}
        />
      }/>
      <Route path='/contact' 
        element={
          <Contact 
            authState={authState}
          />
        } 
      />
      <Route path='/about' 
        element={
          <About 
            authState={authState}
          />
        } 
      />
    </Routes>
  );
};

export default Rout;

