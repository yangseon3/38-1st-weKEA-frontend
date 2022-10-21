import React from "react";
import "./ThumbNail.scss";
function ThumbNail({ url, id, title, size, price }) {
  return (
    <div key={id} className="thumbnail-container">
      <img src={url} alt={id} className="thumbnail-img item" />
      <div className="title item">{title}</div>
      <div className="size item">{size} cm</div>
      <div className="price item">₩ {price}</div>
      <div className="item icon-container">
        <span class="material-symbols-outlined">add_shopping_cart</span>
        <span class="material-symbols-outlined">heart_plus</span>
      </div>
    </div>
  );
}
export default ThumbNail;
