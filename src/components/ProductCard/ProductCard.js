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
    <div key={optionsId} className="productCard-container">
      <Link to={`/detail/${productId}`}>
        <img
          src={url}
          alt={optionsId}
          className="productCard-img productCard-component-each-item"
        />
      </Link>
      <div className="productCard-item-title productCard-component-each-item">
        {title}
      </div>
      <div className="productCard-item-size productCard-component-each-item">
        {size} , {color}
      </div>
      <div className="productCard-item-price productCard-component-each-item">
        ₩ {priceToString(price)}
      </div>
      <div className="productCard-component-each-item productCard-item-icon-container">
        <span className="productCard-add-cart-and-heart-icon material-symbols-outlined">
          add_shopping_cart
        </span>
        <span className="productCard-add-cart-and-heart-icon material-symbols-outlined">
          heart_plus
        </span>
      </div>
    </div>
  );
}
export default ProductCard;
