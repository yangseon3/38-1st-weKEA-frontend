import React from "react";
import "./Footer";

function FooterMenuComponent({
  title,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
}) {
  return (
    <div className="footer-menu-frame-inside-component">
      <div className="footer-menu-component-title footer-menu-component-item">
        {title}
      </div>
      <div className="item1 footer-menu-frame-inside-component-item">
        {item1}
      </div>
      <div className="item2 footer-menu-frame-inside-component-item">
        {item2}
      </div>
      <div className="item3 footer-menu-frame-inside-component-item">
        {item3}
      </div>
      <div className="item4 footer-menu-frame-inside-component-item">
        {item4}
      </div>
      <div className="item5 footer-menu-frame-inside-component-item">
        {item5}
      </div>
      <div className="item6 footer-menu-frame-inside-component-item">
        {item6}
      </div>
      <div className="item7 footer-menu-frame-inside-component-item">
        {item7}
      </div>
      <div className="item8 footer-menu-frame-inside-component-item">
        {item8}
      </div>
      <div className="item9 footer-menu-frame-inside-component-item">
        {item9}
      </div>
    </div>
  );
}
export default FooterMenuComponent;
