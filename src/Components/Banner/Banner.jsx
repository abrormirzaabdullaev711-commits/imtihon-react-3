import React from "react"
import { FaArrowRight } from "react-icons/fa"
import { FaArrowLeft} from "react-icons/fa"
import "./Banner.css"

const Banner = () => {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-main">
          <div className="hero-text">
            <span>THE BEST DEALS TODAY</span>
            <h1>Xbox Consoles</h1>
            <p>
              Save up to 50% on selected Xbox games.
              Get 3 months of Game Pass for free.
            </p>
            <button>SHOP NOW <FaArrowRight /></button>
          </div>

          <img src="console.png"alt=""/>
        </div>

        <div className="hero-right">
          <div className="hero-promo dark">
            <div style={{marginLeft:"65px"}}>
              <small>SUMMER SALES</small>
              <h2>New Google<br />Pixel 9 Pro</h2>
              <button>SHOP NOW <FaArrowRight /></button>
            </div>
            <img  src="googlep6phone.png"    alt=""  />          

         
          </div>

          <div className="hero-promo">
            <img
              src="flipods.png"
              alt="Earbuds"
            />
            <div>
              <small>XIAOMI</small>
              <h2>Redmi Buds Pro</h2>
              <b>₹299 USD</b>
            </div>
          </div>
        </div>
      </section>

      <div className="services">
        <div><div><b>FAST DELIVERY</b><small>Delivery within 24 hours</small></div></div>
        <div><div><b>24 HOURS RETURN</b><small>100% money back guarantee</small></div></div>
        <div><div><b>SECURE PAYMENT</b><small>Your payment information is safe</small></div></div>
        <div><div><b>SUPPORT 24/7</b><small>Contact us anytime</small></div></div>
      </div>



    </div>
  )
}

export default Banner