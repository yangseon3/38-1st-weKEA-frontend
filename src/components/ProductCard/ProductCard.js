import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

function ProductCard({ url, optionsId, productId, title, size, price, color }) {
  const priceToString = price => {
    return parseInt(price)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div key={optionsId} className="ProductCard-container">
      <Link to={`detail/${productId}`}>
        <img
          src={url}
          alt={optionsId}
          className="ProductCard-img ProductCard-component-each-item"
        />
      </Link>
      <div className="ProductCard-item-title ProductCard-component-each-item">
        {title}
      </div>
      <div className="ProductCard-item-size ProductCard-component-each-item">
        {size} , {color}
      </div>
      <div className="ProductCard-item-price ProductCard-component-each-item">
        ₩ {priceToString(price)}
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
