import React from "react";
import "./Footer";

function CustomerInquiryMenuComponent({
  title,
  customerSupport,
  fAQ,
  makeAQuestion,
  deliveryCheck,
  changeAndRefund,
  qualityInsurance,
  recall,
  feedBack,
  id,
}) {
  return (
    <div className="footer-menu-frame-inside-component">
      <div className="footer-menu-component-title footer-menu-component-item">
        {title}
      </div>
      <div className="item1 footer-menu-frame-inside-component-item">
        {customerSupport}
      </div>
      <div className="item2 footer-menu-frame-inside-component-item">{fAQ}</div>
      <div className="item3 footer-menu-frame-inside-component-item">
        {makeAQuestion}
      </div>
      <div className="item4 footer-menu-frame-inside-component-item">
        {deliveryCheck}
      </div>
      <div className="item5 footer-menu-frame-inside-component-item">
        {changeAndRefund}
      </div>
      <div className="item6 footer-menu-frame-inside-component-item">
        {qualityInsurance}
      </div>
      <div className="item7 footer-menu-frame-inside-component-item">
        {recall}
      </div>
      <div className="item8 footer-menu-frame-inside-component-item">
        {feedBack}
      </div>
      <div className="item9 footer-menu-frame-inside-component-item">{id}</div>
    </div>
  );
}
export default CustomerInquiryMenuComponent;
