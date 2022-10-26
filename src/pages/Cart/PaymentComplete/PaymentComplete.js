import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../components/Logo/Logo";
import "./PaymentComplete.scss";

function PaymentComplete() {
  return (
    <div className="payment-complete">
      <div className="payment-complete-wrapper">
        <Logo />
        <h4 className="payment-complete-content">결제 완료</h4>
        <Link className="purchase-history" to="/purchasehistory">
          구매내역
        </Link>
      </div>
    </div>
  );
}
export default PaymentComplete;
