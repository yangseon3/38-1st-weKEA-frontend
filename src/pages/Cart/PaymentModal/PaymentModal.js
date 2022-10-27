import React from "react";
import { orderPayment } from "../../../functions/requests";
import "./PaymentModal.scss";

function PaymentModal({ closePaymentModal, openPaymentComplete, totalPrice }) {
  const payment = () => {
    console.log(typeof totalPrice);
    orderPayment(totalPrice, openPaymentComplete);
  };
  return (
    <div className="cart-modal-bg" onClick={closePaymentModal}>
      <div className="cart-modal" onClick={e => e.stopPropagation()}>
        <div className="cart-modal-content">
          <h4>결제하시겠습니까?</h4>
        </div>
        <div className="cart-modal-button-wrapper">
          <button className="confirm-button" onClick={payment}>
            확인
          </button>
          <button className="cancel-button" onClick={closePaymentModal}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;
