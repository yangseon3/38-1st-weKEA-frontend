import React from "react";
import {
  addToCart,
  deleteWishList,
  getWishList,
} from "../../../functions/requests";
import "./WishListItem.scss";

function WishListItem({ product, priceToString, popAlertModal, setWishLists }) {
  const addProductToCart = () => {
    addToCart(product.id, popAlertModal);
  };
  const deleteProduct = () => {
    deleteWishList(product.id);
    getWishList(setWishLists);
  };
  return (
    <li className="wish-list-item">
      <div className="thumbnail-wrapper">
        <img alt="thumbnail" src={product.thumbnail} />
      </div>
      <div className="wish-list-item-content">
        <div className="product-info">
          <div className="product-options">
            <h4 className="product-name">{product.name}</h4>
            <p className="product-color">{product.color}</p>
            <p className="product-size">{product.size}</p>
          </div>
          <div className="product-price">₩{priceToString(product.price)}</div>
        </div>
        <footer className="functions">
          <span
            className="material-symbols-outlined add-to-cart-button"
            onClick={addProductToCart}
          >
            add_shopping_cart
          </span>
          <span className="delete-button" onClick={deleteProduct}>
            삭제하기
          </span>
        </footer>
      </div>
    </li>
  );
}

export default WishListItem;
