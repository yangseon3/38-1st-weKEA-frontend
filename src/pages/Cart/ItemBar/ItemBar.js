import React from "react";
import {
  deleteCart,
  getCart,
  changeProductQuantity,
  addWishList,
} from "../../../functions/requests";
import "./ItemBar.scss";

function ItemBar({ product, priceToString, popAlertModal, setProducts }) {
  const { thumbnail, price, color, name, size, quantity } = product;
  const numbers = () => {
    let array = [];
    for (let i = 0; i <= 100; i++) {
      array.push(i);
    }
    return array;
  };
  const deleteProduct = () => {
    deleteCart(product.optionId);
    setTimeout(() => {
      getCart(setProducts);
    }, 100);
  };
  const changeQuantity = e => {
    if (e.target.value === 0) {
      deleteProduct();
    }
    changeProductQuantity(product.optionId, e.target.value);
    setTimeout(() => {
      getCart(setProducts);
    }, 100);
  };
  const addToWishList = () => {
    addWishList(product.productId, popAlertModal);
  };
  return (
    <li className="item-bar">
      <div className="thumbnail-wrapper">
        <img alt="thumbnail" src={thumbnail} />
      </div>
      <div className="item-bar-content">
        <div className="product-info">
          <div className="product-options">
            <h4 className="product-name">{name}</h4>
            <p className="product-color">{color}</p>
            <p className="product-size">{size}</p>
          </div>
          <div className="product-price">
            ₩{priceToString(price * quantity)}
          </div>
        </div>
        <footer className="functions">
          <div className="quantity-wrapper">
            <select
              defaultValue={quantity}
              name={name}
              className="quantity"
              onChange={changeQuantity}
            >
              <optgroup>
                {numbers().map(num => {
                  return (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  );
                })}
              </optgroup>
            </select>
            <span className="material-symbols-outlined quantity-icon">
              keyboard_arrow_down
            </span>
          </div>
          <span className="delete-button" onClick={deleteProduct}>
            삭제
          </span>
          <span className="wishlist-button" onClick={addToWishList}>
            위시리스트에 저장
          </span>
        </footer>
      </div>
    </li>
  );
}

export default ItemBar;
