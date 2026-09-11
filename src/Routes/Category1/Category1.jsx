import React from "react";
import "./Category1.css";
import { categoryRows } from "../../mock/index";
import Header2 from "../Header2/Header2";

export default function Category1() {
  return (
 
    <div className="categories-page">
           <Header2/>
      <div className="categories-topbar">
        <div className="categories-title">All Categories</div>
        <select className="categories-select">
          <option>Position</option>
        </select>
      </div>

      {categoryRows.map((row, rowIndex) => (
        <div className="categories-block" key={rowIndex}>
          {row.map((c) => (
            <div className="category-item" key={c.id}>
              <div className={rowIndex === 0 && c.id === 1 ? "category-circle active" : "category-circle"} />
              <div className="category-label">{c.name}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
