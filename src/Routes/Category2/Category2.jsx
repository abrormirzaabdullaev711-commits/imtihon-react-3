  import React from 'react'
import Header2 from '../Header2/Header2'
  import './Category2.css'
  import {products123,brandList} from '../../mock/index'
  const Category2 = () => {
    return (
      <div>
        <Header2/>
         <div className="zara-page">
      <div className="zara-sidebar">
        <div className="zara-sidebar-title">ZARA</div>
 
        <div className="zara-filter-group">
          <div className="zara-filter-heading">Size +</div>
        </div>
 
        <div className="zara-filter-group">
          <div className="zara-filter-heading">Brand -</div>
          <div className="zara-filter-options">
            {brandList.map((brand, index) => (
              <label className="zara-filter-option" key={index}>
                <input type="checkbox" defaultChecked={brand === "Zara"} />
                {brand}
              </label>
            ))}
          </div>
        </div>
 
        <div className="zara-filter-group">
          <div className="zara-filter-heading">Price Range +</div>
        </div>
 
        <div className="zara-filter-group">
          <div className="zara-filter-heading">Discount +</div>
        </div>
 
        <div className="zara-filter-group">
          <div className="zara-filter-heading">Availability +</div>
        </div>
      </div>
 
      <div className="zara-main">
        <div className="zara-topbar">
          <div>Showing 1 - 40 of 145 items</div>
          <div className="zara-topbar-right">
            <span>To Show:</span>
            <select className="zara-select">
              <option>9</option>
            </select>
            <select className="zara-select">
              <option>Position</option>
            </select>
          </div>
        </div>
 
        <div className="zara-grid">
          {products123.map((p) => (
            <div className="zara-card" key={p.id}>
              <div className="zara-image-wrap">
                <img className="zara-image" src={p.image} />
              </div>
              {p.flashDeal && (
                <div>
                  <div className="zara-deal-label">Flash Deal Ends in 5 Hours !</div>
                  <div className="zara-deal-bar">
                    <div className="zara-deal-bar-fill" />
                  </div>
                </div>
              )}
              <div className="zara-product-name">{p.name}</div>
              <div className="zara-rating">
                <span className="zara-rating-count">({p.ratingsCount} Ratings)</span>
              </div>
              {p.hasGetDeal && (
                <button className="zara-btn zara-btn-deal">GET DEAL - ₹{p.price}</button>
              )}
              <button className="zara-btn zara-btn-buy">BUY NOW - ₹{p.price}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
      </div>
    )
  }
  
  export default Category2
  