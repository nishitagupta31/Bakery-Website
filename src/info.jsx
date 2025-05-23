import { useState, useEffect } from 'react';
import { db } from './firebase_config';
import { addDoc, collection } from 'firebase/firestore';
import './info.css';

const Info = ({ cartData, setCartData, authState, clearCart }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    streetAddress: '',
    apartment: '',
    city: '',
    paymentMethod: 'cash-on-delivery'
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  // Load Razorpay script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      setRazorpayLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRazorpayPayment = async (orderData) => {
    if (!razorpayLoaded) {
      setError('Payment gateway is still loading. Please try again.');
      return;
    }

    try {
      // In a real app, you would call your backend API here to create a Razorpay order
      // This is a mock implementation for demonstration
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // From environment variables
        amount: orderData.orderTotal * 100, // Amount in paise
        currency: 'INR',
        name: 'Your Store',
        description: `Order #${orderData.id}`,
        order_id: `order_${orderData.id}_${Date.now()}`, // Mock order ID
        handler: function(response) {
          // In production, verify payment signature on your backend
          clearCart();
          setSuccess(true);
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: authState.userData?.email || formData.email
        },
        theme: {
          color: '#4c130d'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment error:", err);
      setError('Failed to initiate payment. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.country || 
        !formData.streetAddress || !formData.city) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    try {
      const orderData = {
        ...formData,
        cartItems: cartData,
        userId: authState.userData?.uid || 'guest',
        userEmail: authState.userData?.email || formData.email,
        orderTotal: cartData.reduce((total, item) => total + (item.price * item.qty), 0),
        createdAt: new Date(),
        status: formData.paymentMethod === 'cash-on-delivery' ? 'pending' : 'payment-pending'
      };

      const docRef = await addDoc(collection(db, "orders"), orderData);

      if (formData.paymentMethod === 'razorpay') {
        await handleRazorpayPayment({
          ...orderData,
          id: docRef.id
        });
      } else {
        clearCart();
        setSuccess(true);
      }
    } catch (err) {
      console.error("Error:", err);
      setError('Failed to process order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="success-container">
        <div className="success-icon">✓</div>
        <h2>Order Confirmed!</h2>
        <p>Thank you for your purchase. Your order has been received.</p>
        <p>A confirmation email has been sent to {authState.userData?.email || 'your email'}.</p>
        <button 
          className="continue-shopping-btn"
          onClick={() => window.location.href = '/'}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  const subtotal = cartData.reduce((total, item) => total + (item.price * item.qty), 0);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h1>Checkout</h1>
        <div className="checkout-steps">
          <span className="active">1. Information</span>
          <span>2. Shipping</span>
          <span>3. Payment</span>
        </div>
      </div>
      
      {error && (
        <div className="error-message">
          <span>⚠️</span> {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-section">
          <h2>Billing details</h2>
          <div className="form-row">
            <div className="form-group">
              <label>First name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="John"
              />
            </div>
            <div className="form-group">
              <label>Last name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Doe"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Company name (optional)</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Your Company"
            />
          </div>
          
          <div className="form-group">
            <label>Country / Region *</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select a country / region...</option>
              <option value="Japan">Japan</option>
              <option value="United States">United States</option>
              <option value="India">India</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Street address *</label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              placeholder="123 Main St"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Apartment, suite, unit, etc. (optional)</label>
            <input
              type="text"
              name="apartment"
              value={formData.apartment}
              onChange={handleChange}
              placeholder="Apt 4B"
            />
          </div>
          
          <div className="form-group">
            <label>Town / City *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="New York"
              required
            />
          </div>
        </div>

        <div className="order-summary">
          <h2>Your order</h2>
          <div className="order-details">
            <div className="order-row header">
              <span>Product</span>
              <span>Subtotal</span>
            </div>
            
            {cartData.map(item => (
              <div key={item.id} className="order-row">
                <div className="product-info">
                  <img src={item.Image} alt={item.Name} width="40" />
                  <span>{item.Name} × {item.qty}</span>
                </div>
                <span>₹{item.price * item.qty}</span>
              </div>
            ))}
            
            <div className="order-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            
            <div className="order-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            
            <div className="order-row total">
              <span>Total</span>
              <span>₹{subtotal}</span>
            </div>
          </div>
          
          <div className="payment-method">
            <h3>Payment Method</h3>
            <div className="payment-options">
              <label className={`payment-option ${formData.paymentMethod === 'cash-on-delivery' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash-on-delivery"
                  checked={formData.paymentMethod === 'cash-on-delivery'}
                  onChange={handleChange}
                />
                <div className="payment-content">
                  <span>Cash on Delivery</span>
                  <p>Pay with cash upon delivery.</p>
                </div>
              </label>
              
            </div>
          </div>
        </div>

        <div className="button">
          <button 
            type="submit" 
            className={`submit-button ${loading ? 'loading' : ''}`} 
            disabled={loading || cartData.length === 0}
          >
            {loading ? 'Processing...' : 'Place Order'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Info;