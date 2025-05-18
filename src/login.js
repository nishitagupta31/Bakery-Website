import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from './firebase_config';
import { collection, getDocs } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './auth.css';

const Login = ({ authState, setAuthState }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dbref = collection(db, "UserData");

  const authuser = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if(userCredential.user) {
        alert("User Log In Successfully");
        
        const fetchUser = await getDocs(dbref);
        const userSnap = fetchUser.docs.map((doc) => ({id: doc.id, ...doc.data()}));
        const filterUser = userSnap.filter((x) => x.Email === email);
        
        setAuthState({
          isAuthenticated: true,
          userData: {
            uid: userCredential.user.uid,
            email: userCredential.user.email,
            ...filterUser[0]
          },
          loading: false
        });
        navigate('/');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className='login'>
        <div className='container'>
          <div className='img_box'>
            <img src='Images/login.png' alt='banner_img' />
          </div>
          <div className='form'>
            <h2>Welcome to Trilicious</h2>
            <h4>Log in your account</h4>
            <div className='form_box'>
              <div className='box'>
                <input 
                  type='text' 
                  placeholder='Email Address' 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div className='box'>
                <input 
                  type='password' 
                  placeholder='Password' 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              <p>Forgot Password?</p>
              <button onClick={authuser}>Log In</button>
              <div className='account'>
                <p>Don't Have Account? <Link className='link' to='/signup'>Sign Up</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;