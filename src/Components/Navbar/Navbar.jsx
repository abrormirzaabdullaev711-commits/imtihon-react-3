import React from 'react'
import './Navbar.css'
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { ImMan } from "react-icons/im";

import { FaHeart } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
    <div className='Navbar-container'>
        <div className="Navbar">
      <h1><span>Black</span> Friday</h1>
      </div>
        <div className="Navbar-middle">
            <h2>up to <span>59%</span>OFF</h2>
        </div>
        <div className="Navbar-end">
            <button>Shop now </button>
        </div>
    </div>
    <div className="Navbar-container-2">
        <div className="Navbar-2-start">
        <h2>Welcome to Clicon online eCommerce store. </h2>
</div>
<div className="Navbar-2-end">
   <div className='icons'><CiTwitter className='icon'/><CiFacebook  className='icon'/><FaPinterest  className='icon'/><FaReddit  className='icon'/><FaYoutube  className='icon'/><FaInstagram  className='icon'/></div>
   <span className='row'></span> <select>
    <option>Eng</option>
     <option>Uzb</option>
   </select>

   <select>
    <option>Usd</option>
     <option>Usz</option>
   </select>
</div>
    </div>

    <div className="Main-navbar">
     <div className='wrapper'>   <div className="circle"><div className="circle2"><div className="circle3"></div></div></div><h1>UNITED DEALS</h1></div> <div></div>
    <div className="Main-navbar-input"><input type="text" /></div>
    <div className="icons">
        <Link><CiShoppingCart />
</Link>
        <Link><FaHeart/></Link>
        <Link><ImMan/></Link>
    </div>
    </div>
    
      <div className="Links">
        <Link to={'/category'}>all category 1</Link>
        <Link to={'/category2'}>all category 2</Link>
      </div>
    </div>
  )
}

export default Navbar
