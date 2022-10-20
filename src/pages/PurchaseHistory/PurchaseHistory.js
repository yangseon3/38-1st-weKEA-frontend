import React from "react";
import "./PurchaseHistory.scss";

function PurchaseHistory() {
  return (
    <div className="purchase-history">
      <div className="left">
        <div className="content">
          <div className="top">구매 내역</div>
          <div className="bottom">
            주문이 목록에서 누락 되었나요?{" "}
            <span className="span">주문 조회</span> 기능으로 주문을 조회해
            보세요.
          </div>
        </div>
      </div>
      <div className="right">dd</div>
    </div>
  );
}
export default PurchaseHistory;
