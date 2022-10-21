import React from "react";

function IkeaStoryMenuComponent({
  title,
  introducingBrand,
  lifeInsideHouse,
  sustainableLife,
  housePhilosophy,
  newsRoom,
  recruiting,
}) {
  return (
    <div className="footer-menu-frame-inside-component">
      <div className="footer-menu-component-title footer-menu-component-item">
        {title}
      </div>
      <div className="item1 footer-menu-frame-inside-component-item">
        {introducingBrand}
      </div>
      <div className="item2 footer-menu-frame-inside-component-item">
        {lifeInsideHouse}
      </div>
      <div className="item3 footer-menu-frame-inside-component-item">
        {sustainableLife}
      </div>
      <div className="item4 footer-menu-frame-inside-component-item">
        {housePhilosophy}
      </div>
      <div className="item5 footer-menu-frame-inside-component-item">
        {newsRoom}
      </div>
      <div className="item6 footer-menu-frame-inside-component-item">
        {recruiting}
      </div>
    </div>
  );
}
export default IkeaStoryMenuComponent;
