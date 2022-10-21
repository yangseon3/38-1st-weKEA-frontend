import React from "react";
import "./PurchaseHistory.scss";
import PurchaseList from "./PurchaseList";

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
      <div className="purchase-list-box">
        {PURCHASE_HISTORY_LIST.map(item => {
          return (
            <div key={item.purchaseDate}>
              <PurchaseList
                purchaseDate={item.purchaseDate}
                state={item.state}
                price={item.price}
                url={item.url}
                title={item.title}
              />
            </div>
          );
        })}

        <div className="asking-mention-for-page">
          구매 내역 페이지에 대해 어떻게 생각하는지 알려주세요
        </div>
      </div>
    </div>
  );
}
export default PurchaseHistory;

const PURCHASE_HISTORY_LIST = [
  {
    purchaseDate: "2022-10-20",
    state: "출고 완료",
    price: "150000",
    url: "https://picsum.photos/200",
    title: "편한 의자",
  },
  {
    purchaseDate: "2022-10-07",
    state: "배송완료",
    title: "편한 의자",
    price: "433000",
    url: "https://picsum.photos/200",
  },
  {
    purchaseDate: "2022-09-21",
    state: "배송완료",
    title: "편한 의자",
    price: "40000",
    url: "https://picsum.photos/200",
  },
  {
    purchaseDate: "2022-08-01",
    state: "배송완료",
    title: "편한 의자",
    price: "100000",
    url: "https://picsum.photos/200",
  },
  {
    purchaseDate: "2022-07-22",
    state: "배송완료",
    price: "80000",
    title: "편한 의자",
    url: "https://picsum.photos/200",
  },
  {
    purchaseDate: "2022-05-14",
    state: "배송완료",
    price: "220000",
    title: "편한 의자",
    url: "https://picsum.photos/200",
  },
  {
    purchaseDate: "2022-03-14",
    state: "배송완료",
    price: "150000",
    title: "편한 의자",
    url: "https://picsum.photos/200",
  },
];
