import React from "react";
import "./Header2.css";
import { navLinks } from "../../mock/index";

export default function Header2() {
  return (
    <div className="header-2-container">
      <div className="header-2-top-strip">
        <div>Welcome to worldwide Megamart!</div>
        <div className="header-2-top-strip-right">
          <span>Delivery to 42840</span>
          <span>Track your order</span>
          <span>All Offers</span>
        </div>
      </div>
 
      <div className="header-2-main-bar">
        <div className="header-2-logo">
          <span>UNITED DEALS</span>
          <span className="header-2-logo-badge">FLASH SALE</span>
        </div>
        <div className="header-2-search-bar">Search for products, groceries and more...</div>
        <div className="header-2-main-bar-right">
          <span>Sign Up/Sign In</span>
          <span>Cart</span>
        </div>
      </div>
 
      <div className="header-2-nav-bar">
        {navLinks.map((link, index) => (
          <span className="header-2-nav-link" key={index}>{link}</span>
        ))}
      </div>
    </div>
  );
}