import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import './navigation.css';

// import icons
import {BiSearch} from 'react-icons/bi';
import {IoBasketOutline} from 'react-icons/io5';

const Navigation = () => {

  const {totalUniqueItems} = useCart();

  return (
    <>
    <nav id='navbar'>
      <header className="container">
          <Link to="/" className="nav-logo">
            amazon
          </Link>
          <Link to='/search' className="nav-input">
            <input type="text" placeholder='Search*' />
            <span className="nav-search-btn">
              <BiSearch/>
            </span>
          </Link>
          <div className='nav-link-container'>
            <Link to='/sign-up' className="nav-item hover transition">
              <p className="nav-user-top-status">Hello, Sign in</p>
              <h4 className="nav-user-profile-name">Account & List</h4>
            </Link>
            <Link to='/about' className="nav-item hover transition">
              <p className="nav-user-top-status">Dracula</p>
              <h4 className="nav-user-profile-name"> & TimurDev</h4>
            </Link>
            <Link to='/cart' className="nav-cart">
              <span className="nav-cart-icon">
                <IoBasketOutline/>
                <span className="cart-icon-status">{totalUniqueItems}</span>
              </span>
              <span className="nav-cart-text">cart</span>
            </Link>
          </div>
      </header>
    </nav>
    <div className="nav-bottom">
      <div className="container nav-bottom-box">
        <Link to="/" className="nav-bottom-link hover transition">
          New Products
        </Link>
        <Link to="/products/jewelery" className="nav-bottom-link hover transition">
          Jewelery
        </Link>
        <Link to="/products/man" className="nav-bottom-link hover transition">
          Man
        </Link>
        <Link to="/products/women" className="nav-bottom-link hover transition">
          Women
        </Link>
        <Link to="/products/electronics" className="nav-bottom-link hover transition">
          Electronics
        </Link>
      </div>
    </div>
    </>
  )
}

export default Navigation