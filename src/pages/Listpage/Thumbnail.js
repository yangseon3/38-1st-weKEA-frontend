import React from "react";
import "./ThumbNail.scss";
function ThumbNail({ url, id, title, size, price }) {
  return (
    <div key={id} className="thumbnail-container">
      <img
        src={url}
        alt={id}
        className="thumbnail-img thumbnail-component-each-item"
      />
      <div className="thumbnail-item-title thumbnail-component-each-item">
        {title}
      </div>
      <div className="thumbnail-item-size thumbnail-component-each-item">
        {size} cm
      </div>
      <div className="thumbnail-item-price thumbnail-component-each-item">
        ₩ {price}
      </div>
      <div className="thumbnail-component-each-item thumbnail-item-icon-container">
        <span className="thumbnail-add-cart-and-heart-icon material-symbols-outlined">
          add_shopping_cart
        </span>
        <span className="thumbnail-add-cart-and-heart-icon material-symbols-outlined">
          heart_plus
        </span>
      </div>
    </div>
  );
}
export default ThumbNail;
