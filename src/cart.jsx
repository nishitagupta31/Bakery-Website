import React from 'react'
import { Link } from 'react-router-dom'
import './cart.css'
import { IoTrashBin } from "react-icons/io5";

const Cart = ({ cartData, setCartData }) => {

  //Removing Product From cart
  const rmv = (x) =>
  {
    const exsist_check = cartData.find((p) =>
    {
      return x.id === p.id
    })
    if(exsist_check.qty > 0)
    {
      const remove_product = cartData.filter((product) =>
        {
          return product.id !== x.id
        })
      setCartData(remove_product) 
    }
  }

  //handling Quantity 
  const dec = (x) =>
  {
    const exsist_check = cartData.find((p) =>
      {
        return x.id === p.id
      })
      if (exsist_check.qty === 1) 
      {
        const rmv_propduct = cartData.filter((product) =>
        {
           return product.id !== x.id
        })
        setCartData(rmv_propduct)
      } 
      else
      {
        setCartData(cartData.map((item) =>
          {
            return item.id === x.id ? {...exsist_check, qty:exsist_check.qty - 1}:item
          }))
      }
  }
  const inc = (x) =>
  {
    const exsist_check = cartData.find((p) =>
      {
        return x.id === p.id
      })
      setCartData(cartData.map((item) =>
        {
          return item.id === x.id ? {...exsist_check, qty:exsist_check.qty + 1}:item
        }))
  }
  //Calculation total price
  const Totalprice = cartData.reduce((price, item) => price + item.qty * item.price, 0)
  return (
    <>
      <div className='cart'>
        <h5>Your Cart</h5>
        {
          cartData.length === 0 &&
          <div className='empty_cart'>
            <h3>Sweeten Your Cart! 🍩 Browse Treats</h3>
            <Link className='link' to='/product'>Shop Now</Link>
          </div>
        }
<div className='cart_container'>
  <div className='cart_product'>
    {
      cartData.map((curElm) => (
        <div className='box' key={curElm.id}>
          <div className='img_box'>
            <img src={curElm.Image} alt={curElm.Name} />
          </div>
          <div className='detail'>
            <h4>#{curElm.Cat}</h4>
            <h3>{curElm.Name}</h3>
            <p>Price:₹{curElm.price}</p>
            <div className='qty'>
              <div className='qty_buttons'>
                <button onClick={() => dec(curElm)}>-</button>
                <span>{curElm.qty}</span>
                <button onClick={() => inc(curElm)}>+</button>
              </div>
            </div>
            <p>Total: ₹{curElm.price * curElm.qty}</p>
            <div className='rmv_product'>
              <button onClick={()=> rmv(curElm)}><IoTrashBin /> Remove </button>
            </div>
          </div>
        </div>
      ))
    }
  </div>
</div>
       <div className="subtotal-container">
  <div className="subtotal-row">
    <h3 className="subtotal-text">SubTotal: ₹{Totalprice}</h3>
  
    {cartData.length > 0 && (
      <div className="proceed-button-container"> {/* Removed the dot */}
        <Link to="/checkout" className="proceed-button"> {/* Applied class to Link */}
          Proceed to Checkout
        </Link>
      </div>
    )}
  </div>
</div>
      </div>
    </>
  )
}

export default Cart;