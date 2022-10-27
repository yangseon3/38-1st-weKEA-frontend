import React from "react";
import { Link } from "react-router-dom";
import { addToCart, addWishList } from "../../functions/requests";
import "./ProductCard.scss";

function ProductCard({
  url,
  optionsId,
  productId,
  title,
  size,
  price,
  color,
  popAlertModal,
}) {
  const priceToString = price => {
    return parseInt(price)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const addProductToCart = e => {
    addToCart(optionsId, popAlertModal(e));
  };

  const addProductToWishList = e => {
    addWishList(productId, popAlertModal(e));
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
        <span
          className="productCard-add-cart-and-heart-icon material-symbols-outlined"
          data-id="장바구니"
          onClick={addProductToCart}
        >
          add_shopping_cart
        </span>
        <span
          className="productCard-add-cart-and-heart-icon material-symbols-outlined"
          data-id="위시리스트"
          onClick={addProductToWishList}
        >
          heart_plus
        </span>
      </div>
    </div>
  );
}
export default ProductCard;
