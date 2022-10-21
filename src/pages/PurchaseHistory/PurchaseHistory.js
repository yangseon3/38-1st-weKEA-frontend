import React from "react";
import "./PurchaseHistory.scss";

function PurchaseHistory() {
  return (
    <div className="purchase-history">
      <div className="order-history">
        <div className="order-history-content-box">
          <div className="purchase-history-text">구매 내역</div>
          <div className="question-about-omission">
            주문이 목록에서 누락 되었나요?{" "}
            <span className="link-to-order-list">주문 조회</span> 기능으로
            주문을 조회해 보세요.
          </div>
        </div>
      </div>
      <div className="purchase-list-box">dddd</div>
    </div>
  );
}
export default PurchaseHistory;
