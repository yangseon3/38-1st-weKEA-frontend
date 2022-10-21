import React from "react";

function ShoppingMenuComponent({
  title,
  remoteOrder,
  forBusiness,
  selfPlanning,
  mobileApp,
  tipForUsing,
  tipForPurchasing,
  paymentOption,
  giftCard,
}) {
  return (
    <div className="footer-menu-frame-inside-component">
      <div className="footer-menu-component-title footer-menu-component-item">
        {title}
      </div>
      <div className="item1 footer-menu-frame-inside-component-item">
        {remoteOrder}
      </div>
      <div className="item2 footer-menu-frame-inside-component-item">
        {forBusiness}
      </div>
      <div className="item3 footer-menu-frame-inside-component-item">
        {selfPlanning}
      </div>
      <div className="item4 footer-menu-frame-inside-component-item">
        {mobileApp}
      </div>
      <div className="item5 footer-menu-frame-inside-component-item">
        {tipForUsing}
      </div>
      <div className="item6 footer-menu-frame-inside-component-item">
        {tipForPurchasing}
      </div>
      <div className="item7 footer-menu-frame-inside-component-item">
        {paymentOption}
      </div>
      <div className="item8 footer-menu-frame-inside-component-item">
        {giftCard}
      </div>
    </div>
  );
}
export default ShoppingMenuComponent;
