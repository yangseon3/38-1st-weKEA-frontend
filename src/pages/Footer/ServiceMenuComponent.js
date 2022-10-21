import React from "react";

function ServiceMenuComponent({
  title,
  ikeaService,
  deliveryService,
  assemblyService,
  installService,
  kitchenService,
  planningService,
  designService,
  buyBackService,
}) {
  return (
    <div className="footer-menu-frame-inside-component">
      <div className="footer-menu-component-title footer-menu-component-item">
        {title}
      </div>
      <div className="item1 footer-menu-frame-inside-component-item">
        {ikeaService}
      </div>
      <div className="item2 footer-menu-frame-inside-component-item">
        {deliveryService}
      </div>
      <div className="item3 footer-menu-frame-inside-component-item">
        {assemblyService}
      </div>
      <div className="item4 footer-menu-frame-inside-component-item">
        {installService}
      </div>
      <div className="item5 footer-menu-frame-inside-component-item">
        {kitchenService}
      </div>
      <div className="item6 footer-menu-frame-inside-component-item">
        {planningService}
      </div>
      <div className="item7 footer-menu-frame-inside-component-item">
        {designService}
      </div>
      <div className="item8 footer-menu-frame-inside-component-item">
        {buyBackService}
      </div>
    </div>
  );
}
export default ServiceMenuComponent;
