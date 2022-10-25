import React from "react";
import "./ProductCard.scss";
function ProductCard({ url, id, title, size, price, color }) {
  return (
    <div key={id} className="ProductCard-container">
      <img
        src={url}
        alt={id}
        className="ProductCard-img ProductCard-component-each-item"
      />
      <div className="ProductCard-item-title ProductCard-component-each-item">
        {title}
      </div>
      <div className="ProductCard-item-size ProductCard-component-each-item">
        {size} , {color}
      </div>
      <div className="ProductCard-item-price ProductCard-component-each-item">
        ₩ {price}
      </div>
      <div className="ProductCard-component-each-item ProductCard-item-icon-container">
        <span className="ProductCard-add-cart-and-heart-icon material-symbols-outlined">
          add_shopping_cart
        </span>
        <span className="ProductCard-add-cart-and-heart-icon material-symbols-outlined">
          heart_plus
        </span>
      </div>
    </div>
  );
}
export default ProductCard;
