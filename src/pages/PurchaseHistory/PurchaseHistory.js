import React, { useEffect, useState } from "react";
import "./PurchaseHistory.scss";
import AlertModal from "../../components/AlertModal/AlertModal";
import PurchaseList from "./PurchaseList";
import { getPurchase } from "../../functions/requests";

function PurchaseHistory() {
  const [purchaseHistories, setPurchaseHistories] = useState([]);
  const [isAlertModalAppear, setIsAlertModalAppear] = useState(false);

  useEffect(() => {
    getPurchase(setPurchaseHistories);
  }, []);
  return (
    <div className="purchase-history">
      {isAlertModalAppear && (
        <AlertModal alertModalContent={"취소되었습니다."} />
      )}
      <div className="order-history-guide-box">
        <div className="order-history-content-box">
          <div className="purchase-history-text">구매 내역</div>
          <div className="question-about-order-omission">
            주문이 목록에서 누락 되었나요?
            <span className="link-to-order-list">주문 조회</span> 기능으로
            주문을 조회해 보세요.
          </div>
        </div>
      </div>
      <div className="purchase-list-box">
        {purchaseHistories.map(orderingInfo => {
          return (
            <div key={orderingInfo.purchaseDate}>
              <PurchaseList
                purchaseDate={orderingInfo.purchaseDate}
                state={orderingInfo.state}
                price={orderingInfo.price}
                url={orderingInfo.url}
                title={orderingInfo.title}
                orderId={orderingInfo.orderId}
                setIsAlertModalAppear={setIsAlertModalAppear}
                setPurchaseHistories={setPurchaseHistories}
                orderStatus={orderingInfo.orderStatus}
              />
            </div>
          );
        })}

        <div className="asking-mention-for-purchase-history-page">
          구매 내역 페이지에 대해 어떻게 생각하는지 알려주세요
        </div>
      </div>
    </div>
  );
}
export default PurchaseHistory;
