import React from 'react'
import Foot from './Foot'
import './Footer.css'
function Footer() {
  return (
      <div>
          <div className="back_to_top">
              <a href="#"> Back to top</a>
          </div>
      <div className="footer">
        <ul>
          <h3>Get to know us</h3>
          <Foot lists="Careers" />
          <Foot lists="Blog" />
          <Foot lists="About Amazon" />
          <Foot lists="Investor Relations" />
          <Foot lists="Amazon Devices" />
          <Foot lists="Amazon Science" />
        </ul>
        <ul>
          <h3>Make Money with us</h3>
          <Foot lists="Sell products on Amazon" />
          <Foot lists="Sell on Amazon Business" />
          <Foot lists="Sell apps on Amazon" />
          <Foot lists="Become an Affiliate" />
          <Foot lists="Advertise Your Products" />
          <Foot lists="Self-Publish with Us" />
          <Foot lists="Host an Amazon Hub" />
        </ul>
        <ul>
          <h3>Amazon Payment products</h3>
          <Foot lists="Amazon Business Card" />
          <Foot lists="Shop with Points" />
          <Foot lists="Reload Your Balance" />
          <Foot lists="Amazon Currency Converter" />
        </ul>
        <ul>
          <h3>Let Us Help You</h3>
          <Foot lists="Amazon and COVID-19" />
          <Foot lists="Your Account" />
          <Foot lists="Your Orders" />
          <Foot lists="Shipping Rates & Policies" />          
          <Foot lists="Returns & Replacements" />
          <Foot lists="Manage Your Content and Devices" />
          <Foot lists="Amazon Assistant" />
          <Foot lists="Help" />
        </ul>
      </div>
    </div>
  );
}

export default Footer