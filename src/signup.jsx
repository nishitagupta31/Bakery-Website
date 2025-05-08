import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from './firebase_config';
import { collection, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './auth.css';

const Signup = ({setAuthUser, setAuthData}) => {
  // Initialize with empty strings
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(collection(db, "UserData"), {
        name,
        email,
        uid: userCredential.user.uid
      });
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='login'>
      <div className='container'>
        <div className='img_box'>
          <img src='/Images/signup.png' alt='signup' />
        </div>
        <form onSubmit={handleSubmit} className='form'>
          <h3>Welcome to Trilicious</h3>
          <h4>Create your account</h4>
          <div className='form_box'>
            <div className='box'>
              <input 
                type='text' 
                placeholder='Full Name' 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='box'>
              <input
                type='email'
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='box'>
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength="6"
                required
              />
            </div>
            <button type="submit">Sign Up</button>
            <div className='account'>
              <p>Already have an account? <Link className='link' to='/login'>Log in</Link></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;