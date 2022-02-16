import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

// import icons
import {AiOutlineGlobal} from 'react-icons/ai';
import {BiDollarCircle} from 'react-icons/bi';
import {FaFlagUsa} from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
    <a href='#navbar' className="footer-top hover transition">
      Back to top
    </a>
    <div className='footer'>
      <footer className="container">
      <div className="footer-element">
          <h4>Get to Know Us</h4>
          <Link to='/about' className="footer-link hover transition">
            Careers
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Blog
          </Link>
          <Link to='/about' className="footer-link hover transition">
            About Amazon
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Investor Relations
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Amazon Devices
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Amazon Science
          </Link>
        </div>
        <div className="footer-element">
          <h4>Make Money with Us</h4>
          <Link to='/about' className="footer-link hover transition">
            Sell products on Amazon
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Sell on Amazon Business
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Sell apps on Amazon
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Become an Affiliate
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Advertise Your Products
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Advertise Your Products
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Self-Publish with Us
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Host an Amazon Hub
          </Link>
          <Link to='/about' className="footer-link hover transition">
            ›See More Make Money with Us
          </Link>
        </div>
        <div className="footer-element">
          <h4>Amazon Payment Products</h4>
          <Link to='/about' className="footer-link hover transition">
            Amazon Business Card
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Shop with Points
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Reload Your Balance
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Amazon Currency Converter
          </Link>
        </div>
        <div className="footer-element">
          <h4>Let Us Help You</h4>
          <Link to='/about' className="footer-link hover transition">
            Amazon and COVID-19
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Your Account
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Your Orders
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Shipping Rates & Policies
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Returns & Replacements
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Manage Your Content and Devices
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Amazon Assistant
          </Link>
          <Link to='/about' className="footer-link hover transition">
            Help
          </Link>
        </div>
      </footer>
    </div>
    <div className="footer-bottom">
      <Link to="/" className="nav-logo footer-logo">
        amazon
      </Link>
      <Link to='/about' className="footer-bottom-element hover transition">
        <AiOutlineGlobal/> <span>English</span>
      </Link>
      <Link to='/about' className="footer-bottom-element hover transition">
        <BiDollarCircle/> <span>USA - U.S. Dollar</span>
      </Link>
      <Link to='/about' className="footer-bottom-element hover transition">
        <FaFlagUsa/> <span>United States</span>
      </Link>
    </div>
    </div>
  )
}

export default Footer