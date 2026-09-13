import React from "react";
import "./Hero.css";
import { products, featuredProducts, accessoriesProducts, categories,newsList } from "../../mock/index";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="page">
      <div className="section-header">
        <h2>Best Deals</h2>
        <div className="timer-badge">Ends in: 12d : 23h : 53m : 20s</div>
      </div>

      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
           <Link to={`/product/${p.id}`}><img className="product-image" src={p.image} /></Link> 
            <div className="product-name">{p.name}</div>
            <div className="product-price">${p.price}</div>
          </div>
        ))}
      </div>

      <div className="categories-row">
        {categories.map((c) => (
          <div className="category-item" key={c.id}>
            <div className="category-icon" />
            <img src={c.image} alt="" />
            <div className="category-name">{c.name}</div>
          </div>
        ))}
      </div>

      <div className="discount-section">
        <div className="discount-card">
          <div className="discount-label">Limited Discount</div>
          <div className="discount-value">32% Discount</div>
          <button className="shop-btn">Shop Now</button>
          <img src="electronic.jpg" alt="" style={{marginTop:'70px'}}/>
        </div>
        <div>
          <h3>Featured Products</h3>
          <div className="product-grid featured">
            {featuredProducts.map((p) => (
              <div className="product-card" key={p.id}>
                <img className="product-image" src={p.image} />
                <div className="product-name">{p.name}</div>
                <div className="product-price">${p.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="promo-row">
        <div className="promo-card light">
          <div>
            <div className="promo-tag">Introducing</div>
            <div className="promo-title">New Apple Homepod Mini</div>
            <button className="shop-btn accent">Shop Now</button>
          
          </div>
          <div><img src="homepod.png" alt="" /></div> 
        </div>
        <div className="promo-card dark">
          <div>
            <div className="promo-tag">Introducing</div>
            <div className="promo-title">Xiaomi Mi 11 Ultra 12GB+256GB</div>
            <button className="shop-btn light">Shop Now</button>
          </div>
        <img src="mi11.png" alt="" />
        </div>
      </div>

      <h3>Computer Accessories</h3>
      <div className="product-grid accessories">
        {accessoriesProducts.map((p) => (
          <div className="product-card" key={p.id}>
            <img className="product-image" src={p.image} />
            <div className="product-name">{p.name}</div>
            <div className="product-price">${p.price}</div>
          </div>
        ))}

      </div>



      <div className="save">
        <div className="macbook-left">
            <div className="sale"><h3>SAVE UP TO ₹200.00</h3></div>
            <h1>Macbook Pro</h1> <br />
            <p>Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage</p> <br />
            <button>Shop now</button>
        </div>
        <div className="macbook-right">
            <img src="macbook.png" alt="" />
        </div>
      </div>



 <div className="news-section">
      <h2 className="news-heading">Latest News</h2>
      <div className="news-grid">
        {newsList.map((n) => (
          <div className="news-card" key={n.id}>
            <img className="news-image" src={n.image} />
            <div className="news-body">
              <div className="news-meta">
                <span>{n.author}</span>
                <span>{n.date}</span>
                <span>{n.comments}</span>
              </div>
              <div className="news-title">{n.title}</div>
              <div className="news-text">{n.text}</div>
              <button className="news-readmore">READ MORE →</button>
            </div>
          </div>
        ))}
      </div>
    </div>



    </div>
  );
}