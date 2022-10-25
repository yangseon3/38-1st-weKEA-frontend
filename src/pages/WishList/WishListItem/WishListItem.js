import React from "react";
import "./WishListItem.scss";

function WishListItem({ product, priceToString }) {
  return (
    <li className="wish-list-item">
      <div className="thumbnail-wrapper">
        <img alt="thumbnail" src={product.thumbnail} />
      </div>
      <div className="wish-list-item-content">
        <div className="product-info">
          <div className="product-options">
            <h4 className="product-name">{product.name}</h4>
          </div>
          <div className="product-price">₩{priceToString(product.price)}</div>
        </div>
        <footer className="functions">
          <span className="delete-button">삭제</span>
          <span className="add-to-cart-button">장바구니에 추가</span>
        </footer>
      </div>
    </li>
  );
}

export default WishListItem;
