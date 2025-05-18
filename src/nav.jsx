import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './nav.css';

const Nav = ({ authState, setAuthState }) => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const logout = () => {
        setAuthState({
            isAuthenticated: false,
            userData: null,
            loading: false
        });
        navigate('/login');
    };

    const toggleMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    return (
        <div className='nav-container'>
            <nav className='main-nav'>
                {/* Logo */}
                <div className='logo-container'>
                    <img src='Images/logo2.png' alt='Logo' className='logo' />
                </div>

                {/* Hamburger Icon */}
                <button className='hamburger' onClick={toggleMenu} aria-label="Toggle Menu">
                    <span />
                    <span />
                    <span />
                </button>

                {/* Navigation Links */}
                <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/about' className='nav-link'>About Us</Link>
                    <Link to='/product' className='nav-link'>Products</Link>
                    <Link to='/contact' className='nav-link'>Contact Us</Link>
                </div>

                {/* User + Cart */}
                <div className={`user-section ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to='/cart' className='cart-link'>Cart</Link>
                    {authState.isAuthenticated ? (
                        <div className='user-info'>
                            <span className='username'>
                                {authState.userData?.name ||
                                 authState.userData?.displayName ||
                                 authState.userData?.email?.split('@')[0] ||
                                 'User'}
                            </span>
                            <button onClick={logout} className='logout-btn'>Logout</button>
                        </div>
                    ) : (
                        <Link to='/login' className='login-link'>Login</Link>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Nav;
