import { useState } from 'react';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
      // Add order to Firestore
      await addDoc(collection(db, "orders"), {
        ...formData,
        cartItems: cartData,
        userId: authState.userData?.uid || 'guest',
        userEmail: authState.userData?.email || formData.email,
        orderTotal: cartData.reduce((total, item) => total + (item.price * item.qty), 0),
        createdAt: new Date(),
        status: 'pending'
      });

      // Clear cart after successful order
      clearCart();
      setSuccess(true);
    } catch (err) {
      console.error("Error adding document: ", err);
      setError('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="success-container">
        <h2>Order Confirmed!</h2>
        <p>Thank you for your purchase. Your order has been received.</p>
        <p>We'll send a confirmation email shortly.</p>
      </div>
    );
  }

  const subtotal = cartData.reduce((total, item) => total + (item.price * item.qty), 0);

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      
      {error && <div className="error-message">{error}</div>}
      
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
              placeholder="House number and street name"
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
            />
          </div>
          
          <div className="form-group">
            <label>Town / City *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
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
                <span>{item.Name} × {item.qty}</span>
                <span>₹{item.price * item.qty}</span>
              </div>
            ))}
            
            <div className="order-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            
            <div className="order-row total">
              <span>Total</span>
              <span>₹{subtotal}</span>
            </div>
          </div>
          
          <div className="payment-method">
            <h3>Cash on delivery</h3>
            <p>Pay with cash upon delivery.</p>
            <input
              type="hidden"
              name="paymentMethod"
              value="cash-on-delivery"
            />
          </div>
        </div>

        <button type="submit" className="submit-button" disabled={loading || cartData.length === 0}>
          {loading ? 'Processing...' : 'Place order'}
        </button>
      </form>
    </div>
  );
};

export default Info;