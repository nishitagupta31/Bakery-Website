// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from './firebase_config';
import Nav from './nav';
import Rout from './rout';
import Footer from './footer';

const App = () => {
  // Unified auth state
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    userData: null,
    loading: true
  });

  // Cart state
  const [cartData, setCartData] = useState([]);

  // Single auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch additional user data from Firestore
        try {
          const userRef = collection(db, "UserData");
          const querySnapshot = await getDocs(userRef);
          const userData = querySnapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() }))
            .find(u => u.Email === user.email);
          
          setAuthState({
            isAuthenticated: true,
            userData: {
              uid: user.uid,
              email: user.email,
              displayName: user.displayname,
              ...userData
            },
            loading: false
          });
        } catch (error) {
          console.error("Error fetching user data:", error);
          setAuthState({
            isAuthenticated: true,
            userData: {
              uid: user.uid,
              email: user.email,
              displayName: user.displayname
            },
            loading: false
          });
        }
      } else {
        setAuthState({
          isAuthenticated: false,
          userData: null,
          loading: false
        });
      }
    });
    return () => unsubscribe();
  }, []);

  // Handle cart operations
  const handleCart = (product) => {
    if (!authState.isAuthenticated) {
      alert('Please login to add products to your cart');
      return;
    }

    const existingProduct = cartData.find(item => item.id === product.id);
    if (existingProduct) {
      alert('This product is already in your cart');
      return;
    }

    setCartData([...cartData, { ...product, qty: 1 }]);
    alert('Product added to cart');
  };

  if (authState.loading) {
    return (
      <div className="loading-screen" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '1.5rem'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Nav 
        authState={authState}
        setAuthState={setAuthState}
      />
      
      <Rout 
        cartData={cartData}
        setCartData={setCartData}
        cart={handleCart}
        authState={authState}
        setAuthState={setAuthState}
      />
      
      <Footer />
    </BrowserRouter>
  );
};

export default App;