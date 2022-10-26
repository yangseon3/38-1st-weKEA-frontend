import React from "react";

function PurchaseList({ purchaseDate, price, state, title }) {
  return (
    <div className="purchase-list-item-container">
      <div className="purchase-list-item-info-container">
        <div className="purchase-date-text-box component-item">
          {purchaseDate} 이케아 온라인
        </div>
        <div className="component-item purchase-product-name">{title}</div>
        <div className="purchase-delivery-state component-item">{state}</div>
        <div className="price-of-each-purchase-item component-item">
          ₩ {price}
        </div>
      </div>
      <div className="show-more-detail-button-container">
        <button className="show-more-detail-button">></button>
      </div>
    </div>
  );
}
export default PurchaseList;
