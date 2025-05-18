import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoMdCloseCircle } from "react-icons/io";
import './productdetail.css';
import productInfo from './productInfo';

const ProductDetail = ({ setShowDetail, cart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = productInfo.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const handleClose = () => {
    navigate(-1);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    cart({ ...product, selectedSize, quantity });
  };

  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <div className='product_detail' role="dialog">
      <div className='product_detail__container'>
        <div className='product_detail__image-container'>
          <img 
            src={product.Image || 'path/to/default-image.jpg'} 
            alt={product.Name || 'Product image'} 
            className='product_detail__image'
          />
        </div>

        <div className='product_detail__content'>
          <h4 className='product_detail__category'>{product.Cat || 'Category Not Available'}</h4>
          <h3 className='product_detail__title'>{product.Name}</h3>
          <p className='product_detail__description'>{product.Des || 'Description not available'}</p>
          <h5 className='product_detail__price'>₹ {product.price}</h5>

          {/* Size and Quantity Section */}
          <div className='product_detail__options'>
            <div className='product_detail__size'>
              <label htmlFor="size">Size:</label>
              <select 
                id="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>

            <div className='product_detail__quantity'>
              <label htmlFor="quantity">Quantity:</label>
              <input 
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
            </div>
          </div>

          <div className='product_detail__actions'>
            <button className='product_detail__button product_detail__button--primary'>
              Buy Now
            </button>
            <button 
              className='product_detail__button product_detail__button--secondary'
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>

        <button 
          onClick={handleClose}
          aria-label="Close product details"
          className='product_detail__close-button'
        >
          <IoMdCloseCircle className='product_detail__close-icon' />
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;