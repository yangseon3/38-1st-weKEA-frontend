import React from "react";
import { refundOrder, getPurchase } from "../../functions/requests";

function PurchaseList({
  purchaseDate,
  price,
  state,
  title,
  orderId,
  setIsAlertModalAppear,
  setPurchaseHistories,
  purchaseHistories,
  orderStatus,
}) {
  const priceToString = price => {
    return parseInt(price)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const popAlertModal = () => {
    setIsAlertModalAppear(true);
    setTimeout(() => {
      setIsAlertModalAppear(false);
    }, 3000);
  };
  const refund = () => {
    refundOrder(orderId, price, popAlertModal);
    setTimeout(() => {
      console.log(purchaseHistories);
      getPurchase(setPurchaseHistories);
    }, 200);
  };
  return (
    <div className="purchase-list-item-container">
      <div className="purchase-list-item-info-container">
        <div className="purchase-date-text-box component-item">
          {purchaseDate} 이케아 온라인
        </div>
        <div className="component-item purchase-product-name">{title}</div>
        <div className="purchase-delivery-state component-item">{state}</div>
        <div className="price-of-each-purchase-item component-item">
          ₩ {priceToString(price)}
        </div>

        {orderStatus === "결제완료" && (
          <div className="purchase-cancel" onClick={refund}>
            <span>주문취소</span>
          </div>
        )}
      </div>
      <div className="show-more-detail-button-container">
        <div className="orderStatus">{orderStatus}</div>
        <button className="show-more-detail-button"> > </button>
      </div>
    </div>
  );
}
export default PurchaseList;
