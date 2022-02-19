import React from 'react';
import './cart.css';
import { useCart } from 'react-use-cart';

const Basket = () => {

  const {
    items,
    totalUniqueItems,
    totalItems,
    cartTotal,
    removeItem,
    updateItemQuantity,
    emptyCart
  } = useCart();

  return (
    <div className='container cart-box'>
      <div className='cart-left-box'>
        {
          totalItems === 0 ? (
            <h2>Your cart is empty</h2>
          ):(
            <h2 className='cart-header'> 
              <span>You Products</span>
              <div className="add-to-cart-btn transition cart-product-remove-btn" onClick={() => emptyCart()}>Clear cart</div>
            </h2>
          )
        }
      <div className="cart-products">
        {
          items.map(product=>(
            <div className="product-cart" key={product.id}>
              <div className="cart-product-img">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="cart-product-details">
                <p className="cart-product-title">
                  {product.title}
                </p>
                <p className="cart-product-description">
                  {product.description}
                </p>
                <p className="cart-product-price">
                  $ {product.price}
                </p>
              </div>
              <div className="cart-product-action">
                <p className="cart-product-count">This product have {product.quantity}</p>
                <div>
                  <button className='add-to-cart-btn transition' onClick={() => updateItemQuantity(product.id, product.quantity - 1)}>-</button>
                  <button className='add-to-cart-btn transition' onClick={() => updateItemQuantity(product.id, product.quantity + 1)}>+</button>
                </div>
                <button className="add-to-cart-btn transition cart-product-remove-btn" onClick={() => removeItem(product.id)}>remove</button>
              </div>
            </div>
          ))
        }
        </div>
      </div>
      <div className="cart-buy-box">
        <h2>Your cart total {totalUniqueItems} </h2>
        <p className="cart-total-money">Total price: $ {cartTotal}</p>
        <div className="total-cart-buy-btn add-to-cart-btn transition">Buy Now</div>
      </div>
    </div>
  )
}

export default Basket